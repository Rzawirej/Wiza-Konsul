import React from 'react';
import TakeDecisionView from './TakeDecisionView';
import axios from 'axios';

class TakeDecision extends React.Component
{
constructor (props)
{
    super(props)
    this.state={
        uzasadnienie:'',
        rodzajDecyzji:'Pozytywna',
        errors:
        {
            uzasadnienie:''
        }
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSave=this.handleSave.bind(this);
    this.saveDecyzja=this.saveDecyzja.bind(this);
    this.handleLostFocus=this.handleLostFocus.bind(this);
}
componentDidMount()
{
    console.log(this.props.sprawa)
}
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
    
  }
handleSave()
{
    if(this.validateForm(this.state.errors)) {
    this.saveDecyzja({rodzaj:this.state.rodzajDecyzji, uzasadnienie:this.state.uzasadnienie, identyfikator:String(this.props.idd), kierownik:"MaciejNH"})    
    }
}
async saveDecyzja(decyzja)
{
    console.log(decyzja)
    try {
        const response = await axios.post('/decyzje', {rodzaj:decyzja.rodzaj,
            uzasadnienie:decyzja.uzasadnienie, kierownik:decyzja.kierownik, identyfikator:decyzja.identyfikator});
        
        const response2 = await axios.put('/sprawy/'+this.props.sprawa.identyfikator, {imiona:this.props.sprawa.imiona,
            nazwisko:this.props.sprawa.nazwisko,
            płeć:this.props.sprawa.płeć,
            krajowyNumerIdentyfikacyjny:this.props.sprawa.krajowyNumerIdentyfikacyjny,
            numerDokumentuIdentyfikującego:this.props.sprawa.numerDokumentuIdentyfikującego,
            zdjęcie:this.props.sprawa.zdjęcie,
            treść:this.props.sprawa.treść,
            identyfikator:this.props.sprawa.identyfikator,
            płeć:this.props.sprawa.płeć,
            opłata: this.props.sprawa.opłata ,
            krajPochodzenia:this.props.sprawa.krajPochodzenia,
            obywatelstwo: this.props.sprawa.obywatelstwo,
            celWydania:this.props.sprawa.celWydania,
            rodzajWizy:this.props.sprawa.rodzajWizy,
            rodzaj:this.props.sprawa.rodzaj,
            pracownik:this.props.pracownik,
            decyzja:decyzja.identyfikator
        });
        if(response.name != "Error"){
          
        }
        if(response2.name != "Error"){
          
        }
        this.props.handleReturn();
      }
      catch(e)
      {
        const message = JSON.parse(JSON.stringify(e)).message;
      
      console.log(message);
      if (message == undefined) {
        this.props.changeIsAdding('');
      }
      }
      
}
validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  handleLostFocus(event)
{
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name)
    {
            case 'uzasadnienie':
            errors.uzasadnienie= value.length==0 ? 'Uzasadnienie jest obowiązkowe':'';
            break;
           
            
    }
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })

}
render()
{
    return(

        <TakeDecisionView sprawa={this.props.sprawa} handleReturn={this.props.handleReturn} errors={this.state.errors} handleChange={this.handleChange}
        uzasadnienie={this.state.uzasadnienie} rodzajDecyzji={this.rodzajDecyzji} handleSave={this.handleSave} handleLostFocus={this.handleLostFovus}  />
    )
}



}
export default TakeDecision;