import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import SprawyList from './components/SprawyList';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {lista: []}
      }
      
        async componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
         this.getData();
            
            
        }
       async getData()
        {
          const response = await  axios
            .get('/sprawy')
            .then(sprawy => this.setState({ lista: sprawy.data }))
            .catch(err => {
                console.log(err);
                return null;
            });
            console.log(this.state.lista);
            console.log(response);
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
