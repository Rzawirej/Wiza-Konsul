import React from 'react';
import KontaForm from './components/KontaForm/KontaForm';
import axios from 'axios';
import SprawyList from './components/SprawyList/SprawyList';
import SideMenu from './components/SideMenu/SideMenu';
import { Grid, Segment } from 'semantic-ui-react'


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
                <Grid textAlign="center">
                    <Grid.Column width={4}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            <KontaForm/>
                        </Segment>
                        
                        {/*<SprawyList sprawy={this.state.lista}/>*/}
                    </Grid.Column>
                </Grid>
        )};
    }
export default Root;
