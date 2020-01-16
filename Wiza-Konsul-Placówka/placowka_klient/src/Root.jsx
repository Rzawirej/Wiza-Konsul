import React from 'react';

import { Grid, Segment } from 'semantic-ui-react';
import SearchBar from './Layout/SearchBar';
import SprawyList from './Layout/SprawyList.jsx';
import MenuP from './Layout/MenuPracownik/MenuP';
import CaseFormView from "./Layout/AddCase/CaseFormView"


class Root extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {lista: [],values:"test"};
        this.addClicked=this.addClicked.bind(this);
      }
      
        componentDidMount() {
           // axios.defaults.baseURL = 'http://localhost:5000/api';
           // this.getData();
            
            
        }
    /*   async getData()
        {
            try{
                const response = await axios.get('/sprawy');
                this.setState({ lista: response.data });
            } catch (e) {
                console.log(JSON.parse(JSON.stringify(e)));
            }
            console.log(this.state.lista);
     };*/
           addClicked()
           {
               console.log(this.state.values);
           }
      
        render() {
            return (
                <Grid textAlign="center">
                   
                    <Grid.Row width={10} height={10}>
                        <Segment>
                            <SearchBar/>
                        </Segment>
                        </Grid.Row>
                       {/*} <Grid.Row height={10}>
                        <Grid.Column width={12} style={{height:'60vh'}}>
                            <div >
                            <SprawyList  sprawy={this.state.lista}></SprawyList>
                            </div>
                        </Grid.Column>
            </Grid.Row>{*/}
                        <Grid.Row width={10} height={10}>
                            <MenuP handleAdd={this.addClicked}/>
                        </Grid.Row>
                        <CaseFormView cele_wizyt={["1","2","3","4a","4b"]}/>
                </Grid>
        )};
    }
export default Root;
