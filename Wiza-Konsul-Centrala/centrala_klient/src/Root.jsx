import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import SprawyList from './components/SprawyList';


class Root extends React.Component {
    
        async componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
        }
        render() {
           const list=[{"id":1,"imie":"Jan","nazwisko":"Kowalski"}];
            return (
                <div>
            <Form/>
            <SprawyList sprawy={list}/>
            </div>
            
        )};
    }
export default Root;
