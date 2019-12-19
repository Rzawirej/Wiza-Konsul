import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import SprawyList from './components/SprawyList';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {lista:null}
      }
      
        async componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
         this.getData();
            
            
        }
       async getData()
        {
          await  axios
            .get('/sprawy')
            .then(sprawy => this.setState({ lista: sprawy }))
            .catch(err => {
                console.log(err);
                return null;
            });
     };
           
      
        render() {
            
           console.log(this.state.lista);
          
            return (
                <div>
            <Form/>
            <SprawyList sprawy={this.state.lista}/>
            </div>
            
        )};
    }
export default Root;
