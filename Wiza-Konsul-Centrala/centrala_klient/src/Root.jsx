import React from 'react';
import Form from './components/Form/Form';
import axios from 'axios';
import SprawyList from './components/SprawyList';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {lista: []}
      }
      
        componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
            this.getData();
            
            
        }
       async getData()
        {
            try{
                const response = await axios.get('/sprawy');
                this.setState({ lista: response.data });
            } catch (e) {
                console.log(JSON.parse(JSON.stringify(e)));
            }
            console.log(this.state.lista);
     };
           
      
        render() {
            
           
          
            return (
                <div>
            <Form/>
            <SprawyList sprawy={this.state.lista}/>
            </div>
            
        )};
    }
export default Root;
