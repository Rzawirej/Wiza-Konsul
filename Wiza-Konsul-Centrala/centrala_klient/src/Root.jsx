import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import SprawyList from './components/SprawyList';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {lista:axios.get('/sprawy')}
      }
      async UNSAFE_componentWillMount()
      {
        //this.setState({lista: axios.get('/sprawy')});
      }
        async componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
         
            console.log("tu jestem");
            
        }
        
           
      
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
