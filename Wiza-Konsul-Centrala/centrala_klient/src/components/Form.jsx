import React from 'react';
import axios from 'axios';

class Form extends React.Component{
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
     console.log('Podano następujące imię: ' + sprawa.imie + '\nPodano następujące nazwisko: ' + sprawa.nazwisko);
    try {
      const response = await axios.post('/sprawy', {imie: sprawa.imie, nazwisko: sprawa.nazwisko});
    } catch (e) {
    console.log(JSON.parse(JSON.stringify(e)));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Imię:
          <input name="imie" type="text" value={this.state.imie} onChange={this.handleChange} />
        </label>
        <label>
          Nazwisko:
          <input name="nazwisko" type="text" value={this.state.nazwisko} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

export default Form;
