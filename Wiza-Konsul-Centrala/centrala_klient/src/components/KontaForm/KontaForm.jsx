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
          placowka: '',
          rola: 'PracownikPlacówki',
          errors: {
            imiona: '',
            nazwisko: '',
            pesel: '',
            login: '',
            haslo: '',
            placowka: '',
          },
          placowkaExists: '',
          loginExists: '',
          placowkaRolaConflict: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
      this.saveKonto = this.saveKonto.bind(this);
      this.editKonto = this.editKonto.bind(this);
      this.handleLostFocus = this.handleLostFocus.bind(this);
      this.validateForm = this.validateForm.bind(this);
      this.getActualKonto = this.getActualKonto.bind(this);
  }
    
  componentDidMount() {
    this.getActualKonto();
  }

  async getActualKonto() {
    if(this.props.actualLogin.length>0){
      const response = await axios.get('/konta/' + this.props.actualLogin);
      this.setState({
        imiona: response.data.imiona,
        nazwisko: response.data.nazwisko,
        pesel: response.data.pesel,
        login: response.data.login,
        haslo: response.data.haslo,
        placowka: response.data.placowka,
        rola: response.data.stanowisko,
      })

    }
  }
   handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }
  handleLostFocus(event){
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    const validEmailRegex =
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
      case 'imiona': 
        errors.imiona = 
          value.length == 0 ? 'Imiona to pole obowiązkowe' :'';
        break;
      case 'nazwisko': 
        errors.nazwisko = 
          value.length == 0 ? 'Nazwisko to pole obowiązkowe' :'';
        break;
      case 'pesel': 
        errors.pesel = 
          value.length == 0 ? 'Pesel to pole obowiązkowe' :
          value.length != 11 || !/^\d+$/.test(value)
            ? 'Pesel musi zawierać 11 cyfr'
            : '';
        break;
      case 'login': 
        errors.login = 
          value.length == 0 ? 'Login to pole obowiązkowe' :
          value.length < 6
            ? 'Login musi mieć co najmniej 6 znaków'
            : '';
        break;
      case 'haslo': 
        errors.haslo = 
          value.length == 0 ? 'Hasło to pole obowiązkowe' :
          value.length < 8
            ? 'Hasło musi mieć co najmniej 8 znaków'
            : '';
        break;
      case 'placowka': 
        errors.placowka = 
          value.length == 0 ? 'Id placówki to pole obowiązkowe' :
           !/^\d+$/.test(value)
           ? 'Id placówki przyjmuje tylko cyfry'
           : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value})
  }

  async handleSubmit(event) {
    this.state.placowkaRolaConflict = '';
    if(this.state.rola == "AdministratorCentrali" && this.state.placowka != "0" ||
    this.state.rola == "PracownikCentrali" && this.state.placowka != "0"  ){
      await this.setState({
        placowkaRolaConflict : 'Nie można dodać '+this.state.rola+' do placówki'
      });
    }
    if (this.state.rola == "PracownikPlacówki" && this.state.placowka == "0" ||
      this.state.rola == "KierownikPlacówki" && this.state.placowka == "0"){
        await this.setState({
        placowkaRolaConflict : 'Nie można dodać '+this.state.rola+' do centrali'
      });
    }
    if (this.validateForm(this.state.errors) && this.state.placowkaRolaConflict.length == 0) {
      this.saveKonto({
        imiona: this.state.imiona,
        nazwisko: this.state.nazwisko,
        pesel: this.state.pesel,
        login: this.state.login,
        haslo: this.state.haslo,
        placowka: this.state.placowka,
        rola: this.state.rola
      })
    } else {
      console.error('Złe dane')
    }
    event.preventDefault();
  }

  async handleSubmitEdit(event) {
    this.state.placowkaRolaConflict = '';
    if(this.state.rola == "AdministratorCentrali" && this.state.placowka != "0" ||
    this.state.rola == "PracownikCentrali" && this.state.placowka != "0"  ){
      await this.setState({
        placowkaRolaConflict : 'Nie można dodać '+this.state.rola+' do placówki'
      });
    }
    if (this.state.rola == "PracownikPlacówki" && this.state.placowka == "0" ||
      this.state.rola == "KierownikPlacówki" && this.state.placowka == "0"){
        await this.setState({
        placowkaRolaConflict : 'Nie można dodać '+this.state.rola+' do centrali'
      });
    }
    
    if (this.validateForm(this.state.errors) && this.state.placowkaRolaConflict.length==0) {
      this.editKonto({
        imiona: this.state.imiona,
        nazwisko: this.state.nazwisko,
        pesel: this.state.pesel,
        login: this.state.login,
        haslo: this.state.haslo,
        placowka: this.state.placowka,
        rola: this.state.rola
      })
    } else {
      console.error('Złe dane')
    }
    event.preventDefault();
  }
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  async saveKonto(konto){
    try {
      const response = await axios.post('/konta', {imiona: konto.imiona, nazwisko: konto.nazwisko, pesel: konto.pesel, login: konto.login, haslo: konto.haslo, placowka: konto.placowka, stanowisko: konto.rola});
      if(response.name != "Error"){
        this.props.changeIsAdding();
      }
    } catch (e) {
      const message = JSON.parse(JSON.stringify(e)).message;
      this.setState({placowkaExists : ''})
      this.setState({loginExists : ''})
      console.log(message);
      if (message == undefined) {
        this.props.changeIsAdding('');
      }
      if(message == 'Request failed with status code 407')  this.setState({placowkaExists : 'Nie istnieje placówka o takim id'});
      if(message == 'Request failed with status code 408')  this.setState({loginExists : 'Istnieje już użytkownik o takim loginie'});
      if(message == 'Request failed with status code 409')  {
        this.setState({placowkaExists : 'Nie istnieje placówka o takim id'})
        this.setState({loginExists : 'Istnieje już użytkownik o takim loginie'});
      }
    }
  }
  async editKonto(konto) {
    try {
      const response = await axios.put('/konta/'+this.props.actualLogin, {
        imiona: konto.imiona,
        nazwisko: konto.nazwisko,
        pesel: konto.pesel,
        login: konto.login,
        haslo: konto.haslo,
        placowka: konto.placowka,
        stanowisko: konto.rola
      });
      if (response.name != "Error") {
        this.props.changeIsAdding();
      }
    } catch (e) {
      const message = JSON.parse(JSON.stringify(e)).message;
      this.setState({
        placowkaExists: ''
      })
      this.setState({
        loginExists: ''
      })
      console.log(message);
      if (message == undefined) {
        this.props.changeIsAdding('');
      }
      if (message == 'Request failed with status code 407') this.setState({
        placowkaExists: 'Nie istnieje placówka o takim id'
      });
      if (message == 'Request failed with status code 408') this.setState({
        loginExists: 'Istnieje już użytkownik o takim loginie'
      });
      if (message == 'Request failed with status code 409') {
        this.setState({
          placowkaExists: 'Nie istnieje placówka o takim id'
        })
        this.setState({
          loginExists: 'Istnieje już użytkownik o takim loginie'
        });
      }
    }
  }

  render() {
    return (
      <KontaFormView
        handleSubmit={this.handleSubmit}
        handleSubmitEdit={this.handleSubmitEdit}
        imiona={this.state.imiona}
        nazwisko={this.state.nazwisko}
        pesel={this.state.pesel}
        login={this.state.login}
        haslo={this.state.haslo}
        placowka={this.state.placowka}
        errors={this.state.errors}
        placowkaExists={this.state.placowkaExists}
        loginExists={this.state.loginExists}
        placowkaRolaConflict={this.state.placowkaRolaConflict}
        rola={this.state.rola}
        handleChange={this.handleChange}
        changeIsAdding={this.props.changeIsAdding}
        handleLostFocus={this.handleLostFocus}
        actualLogin={this.props.actualLogin}
      />
    );
  }
}

export default KontaForm;
