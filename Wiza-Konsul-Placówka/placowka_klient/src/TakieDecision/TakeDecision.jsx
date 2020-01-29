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
    this.saveDecyzja({rodzajDecyzji:TimeRanges.state.rodzajDecyzji, uzasadnienie:this.state.uzasadnienie, identyfikator:'1'})    
    }
}
async saveDecyzja(decyzja)
{
    console.log(decyzja)
    try {
        const response = await axios.post('/sprawy', {rodzajDecyzji:decyzja.rodzajDecyzji,
            uzasadnienie:decyzja.uzasadnienie,identyfikator:decyzja.identyfikator
        
        
        
        });
        if(response.name != "Error"){
          
        }
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

        <TakeDecisionView sprawa={this.props.sprawa} handleReturn={this.props.handleReturn} errors={this.state.errors} 
        uzasadnienie={this.state.uzasanienie} rodzajDecyzji={this.rodzajDecyzji} />
    )
}



}
export default TakeDecision;