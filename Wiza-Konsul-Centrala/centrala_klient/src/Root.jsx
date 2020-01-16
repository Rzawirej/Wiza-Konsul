import React from 'react';
import KontaForm from './components/KontaForm/KontaForm';
import axios from 'axios';
import SideMenu from './components/SideMenu/SideMenu';
import { Grid, Segment, Header } from 'semantic-ui-react'
import KontaTable from './components/ManageKonta/KontaTable/KontaTable';
import ManageKonta from './components/ManageKonta/ManageKonta';
import WorkPlace from './components/WorkPlace/WorkPlace';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {isAdding: false}
      }
            
        render() {
            return (
                <>
                <Header as='h1' textAlign='center'>WIZA KONSUL CENTRALA</Header>
                <Grid textAlign="center">
                    <Grid.Column width={4} verticalAlign="middle">
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            <WorkPlace/>
                        </Segment>
                    </Grid.Column>
                </Grid>
                </>
        )};
    }
export default Root;
