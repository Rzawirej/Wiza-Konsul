import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import { Grid, Segment, Header} from 'semantic-ui-react'
import KontaWorkPlace from './components/KontaWorkPlace/KontaWorkPlace';
import RaportyWorkPlace from './components/RaportyWorkPlace/RaportyWorkPlace';


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            isKonta: true,
            isRaporty: false,
            isOther: false
        }
        this.manageWorkPlace = this.manageWorkPlace.bind(this);
      }
    manageWorkPlace(name) {
        if(name == 'raporty'){
            this.setState({
                isKonta: false,
                isRaporty: true, 
                isOther: false
            });
            return;
        }
        if (name == 'konta') {
            this.setState({
                isKonta: true,
                isRaporty: false,
                isOther: false
            });
            return;
        }
        this.setState({
            isKonta: false,
            isRaporty: false,
            isOther: true
        });
    }
             
        render() {
            return (
                <>
                <Header as='h1' textAlign='center'>WIZA KONSUL CENTRALA</Header>
                <Grid textAlign="center">
                    <Grid.Column width={4} verticalAlign="middle">
                        <SideMenu manageWorkPlace={this.manageWorkPlace}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            {this.state.isKonta ? <KontaWorkPlace/> : this.state.isRaporty ? <RaportyWorkPlace/> : <p>Jeszcze nic tu nie ma.</p>}
                        </Segment>
                    </Grid.Column>
                </Grid>
                </>
        )};
    }
export default Root;
