import React from 'react';
import Form from './components/Form';
import axios from 'axios';

class Root extends React.Component {
        async componentDidMount() {
            axios.defaults.baseURL = 'http://localhost:5000/api';
        }
        render() {
            return (
            <Form/>
        )};
    }
export default Root;
