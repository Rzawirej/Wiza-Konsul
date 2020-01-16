import React from 'react';
import axios from 'axios';
import KontaFormView from "./KontaFormView";

class KontaForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imiona: '',
            nazwisko: '',
            pesel: '',
            login: '',
            haslo: '',
            placowka: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveKonto = this.saveKonto.bind(this);
    }
   handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
   
    this.saveKonto({
      imiona: this.state.imiona,
      nazwisko: this.state.nazwisko,
      pesel: this.state.pesel,
      login: this.state.login,
      haslo: this.state.haslo,
      placowka: this.state.placowka,
    })
    event.preventDefault();
  }
  
  async saveKonto(konto){
    try {
      const response = await axios.post('/konta', {imiona: konto.imiona, nazwisko: konto.nazwisko, pesel: konto.pesel, login: konto.login, haslo: konto.haslo, placowka: konto.placowka});
      console.log(response);
    } catch (e) {
      console.log(JSON.parse(JSON.stringify(e)));
    }
  }

  render() {
    return (
      <KontaFormView
        handleSubmit={this.handleSubmit}
        imiona={this.state.imiona}
        nazwisko={this.state.nazwisko}
        pesel={this.state.pesel}
        login={this.state.login}
        haslo={this.state.haslo}
        placowka={this.state.placowka}
        handleChange={this.handleChange}
        changeIsAdding={this.props.changeIsAdding}
      />
    );
  }
}

export default KontaForm;
