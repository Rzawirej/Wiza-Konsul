import React from 'react';
import {Form, Button} from 'semantic-ui-react'



const KontaFormView = (props) => {
    const {
        handleSubmit,
        handleSubmitEdit,
        imiona, 
        nazwisko,
        pesel,
        login,
        haslo,
        placowka,
        errors,
        rola,
        placowkaExists,
        loginExists,
        handleChange,
        changeIsAdding,
        handleLostFocus,
        actualLogin
    } = props;
    const errorStyle={color: 'red'};
    return (
      
      <Form onSubmit={actualLogin.length > 0 ? handleSubmitEdit : handleSubmit}>
        <Form.Field inline>
          <label inline> Imiona: </label>
          <input name="imiona" type="text" value={imiona} onChange={handleChange}  onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.imiona}</span>
        <Form.Field inline>
          <label inline>Nazwisko:</label>
          <input name="nazwisko" type="text" value={nazwisko} onChange={handleChange} onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.nazwisko}</span>
        <Form.Field inline >
          <label inline >Pesel:</label>
          <input  name="pesel" type="text" value={pesel} onChange={handleChange} onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.pesel}</span>
        <Form.Field inline>
          <label inline>Login:</label>
          <input name="login" type="text" value={login} onChange={handleChange} onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.login}</span>
        <span style={errorStyle}>{loginExists}</span>
        <Form.Field inline>
          <label inline>Haslo:</label>
          <input name="haslo" type="password" value={haslo} onChange={handleChange} onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.haslo}</span>
        <Form.Field inline>
          <label inline>Id placówki:</label>
          <input name="placowka" type="text" value={placowka} onChange={handleChange} onBlur={handleLostFocus}/>
        </Form.Field>
        <span style={errorStyle}>{errors.placowka}</span>
        <span style={errorStyle}>{placowkaExists}</span>
        
        <Form.Field inline label='Rola' control='select' value={rola} name="rola" onChange={handleChange}>
          <option value='PracownikPlacówki'>Pracownik Placówki</option>
          <option value='KierownikPlacówki'>Kierownik Placówki</option>
          <option value='PracownikCentrali'>Pracownik Centrali</option>
          <option value='AdministratorCentrali'>Administrator Centrali</option>
        </Form.Field>
        
        <Button type="submit" value="Zapisz" >Zapisz</Button>
        <Button onClick={changeIsAdding}>Anuluj </Button>
        
      </Form>
    );
};
export default KontaFormView;