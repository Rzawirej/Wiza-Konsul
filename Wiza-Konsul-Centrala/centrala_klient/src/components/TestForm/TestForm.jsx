import React from 'react';
import axios from 'axios';
import KontaFormView from "./TestFormView";

class KontaForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imie: '',
            nazwisko: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveSprawa = this.saveSprawa.bind(this);
    }
   handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
   
    this.saveSprawa({
      imie: this.state.imie,
      nazwisko: this.state.nazwisko
    })
    event.preventDefault();
  }
  
  async saveSprawa(sprawa){
    try {
      await axios.post('/sprawy', {imie: sprawa.imie, nazwisko: sprawa.nazwisko});
    } catch (e) {
      console.log(JSON.parse(JSON.stringify(e)));
    }
  }

  render() {
    return (
      <KontaFormView
        handleSubmit={this.handleSubmit}
        imie={this.state.imie}
        nazwisko={this.state.nazwisko}
        handleChange={this.handleChange}
      />
    );
  }
}

export default KontaForm;
