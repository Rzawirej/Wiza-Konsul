import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SearchBar from './Layout/SearchBar';
import SprawyList from './Layout/SprawyList.jsx';
import MenuP from './Layout/MenuPracownik/MenuP';
import CaseForm from "./Layout/AddCase/CaseForm"
import axios from 'axios';

class Root extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {lista: [],values:"test",menu:true}
       this.menuChangeF=this.menuChangeF.bind(this);
       this.menuChangeT=this.menuChangeT.bind(this);
      }
      menuChangeF()
      {
          this.setState({menu:false});
      }
      menuChangeT()
      {
          this.setState({menu:true});
      }
        componentDidMount() {
           axios.defaults.baseURL = 'http://localhost:5001/api';
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
            if(this.state.menu) {
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
                            <MenuP menu={this.menuChangeF}/>
                        </Grid.Row>
                        
                </Grid>
        
        )}
    else{
        return(
            <CaseForm handleReturn={this.menuChangeT}/>
        )
    }};
    }
export default Root;
