import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import SearchBar from './Layout/SearchBar';
import SprawyList from './Layout/SprawyList.jsx';
import MenuP from './Layout/MenuPracownik/MenuP';
import CaseForm from "./Layout/AddCase/CaseForm"
import axios from 'axios';
import MenuK from './MenuKierownik/MenuK';
import TakeDecision from './TakieDecision/TakeDecision';


class Root extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {lista: [],values:"test",menu:true, wydawanie:true, podejmij:true, sprawa:null , identyfikator:0, decyzje:[], idd:0}
       this.menuChangeF=this.menuChangeF.bind(this);
       this.menuChangeT=this.menuChangeT.bind(this);
       this.wydawanieChangeF=this.wydawanieChangeF.bind(this);
       this.wydawanieChangeT=this.wydawanieChangeT.bind(this);
       this.wybierzSprawę=this.wybierzSprawę.bind(this);
      }
      menuChangeF()
      {
          this.setState({menu:false});
      }
      menuChangeT()
      {
          this.setState({menu:true});
      }
      wydawanieChangeF()
      {
          if(this.state.sprawa===null)
          {alert('Proszę wybrać sprawę')}
          else
          {
          this.setState({wydawanie:false});
          }
      }
      wydawanieChangeT()
      {
          this.setState({wydawanie:true});
      }
async wybierzSprawę(id)
{
    for (let i=0 ;i<this.state.lista.length;i++)
    {
        if(this.state.lista[i].identyfikator===id)
        {
            this.setState({sprawa:this.state.lista[i]})
        }
    }
    console.log(this.state.sprawa)
    
}

        componentDidMount() {
           axios.defaults.baseURL = 'http://localhost:5001/api';
            this.getData();
            
            
        }
      async getData()
        {
            try{
                const response = await axios.get('/sprawy');
                const response2 = await axios.get('/decyzje');
                this.setState({ lista: response.data ,decyzje:response2.data});
            } catch (e) {
                console.log(JSON.parse(JSON.stringify(e)));
            }
            console.log(this.state.lista);
            if(this.state.lista.length>0){
            this.setState({identyfikator:Number(this.state.lista[this.state.lista.length-1].identyfikator)+1})
            }
            if(this.state.decyzje.length>0){
                this.setState({idd:Number(this.state.decyzje[this.state.decyzje.length-1].identyfikator)+1})
                }
     };
           
     
      
        render() {
            if(this.state.podejmij){
            if(this.state.menu) {
            return (
        
                
                <Grid textAlign="center">
                   
                    <Grid.Row width={10} height={10}>
                        <Segment>
                            <SearchBar/>
                        </Segment>
                        </Grid.Row>
                        <Grid.Row height={10}>
                        <Grid.Column width={12} style={{height:'60vh'}}>
                            <div >
                            <SprawyList  sprawy={this.state.lista} wybierzSprawę={this.wybierzSprawę} ></SprawyList>
                            </div>
                        </Grid.Column>
            </Grid.Row>
                        <Grid.Row width={10} height={10}>
                            <MenuP menu={this.menuChangeF}/>
                        </Grid.Row>
                        
                        <Button onClick={()=>{this.setState({podejmij:!this.state.podejmij})}}>Change</Button>
                </Grid>
                
        
        )}
    else{
        return(
            <CaseForm handleReturn={this.menuChangeT} identyfikator={this.state.identyfikator}/>
        )
    }
}
    else{
        
        if(this.state.wydawanie){
            return(
        <Grid textAlign="center">
                   
        <Grid.Row width={10} height={10}>
            <Segment>
                <SearchBar/>
            </Segment>
            </Grid.Row>
            <Grid.Row height={10}>
            <Grid.Column width={12} style={{height:'60vh'}}>
                <div >
                <SprawyList  sprawy={this.state.lista}  wybierzSprawę={this.wybierzSprawę} id={this.state.identyfikator}></SprawyList>
                </div>
            </Grid.Column>
            </Grid.Row> 
            <Grid.Row width={10} height={10}>
                <MenuK handleTake={this.wydawanieChangeF}/>
            </Grid.Row>
            <Button onClick={()=>{this.setState({podejmij:!this.state.podejmij})}}>Change</Button>
    </Grid>
            )
        }
        else{
            return(
            <TakeDecision sprawa={this.state.sprawa} handleReturn={this.wydawanieChangeT} idd={this.state.idd} pracownik={"Kichel"} />
            )
        }
    }
    }};
    
export default Root;
