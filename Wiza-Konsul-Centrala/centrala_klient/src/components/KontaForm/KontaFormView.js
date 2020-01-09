import React from 'react';
import {Form } from 'semantic-ui-react'
const KontaFormView = (props) => {
    const {
        handleSubmit,
        imiona,
        nazwisko,
        pesel,
        login,
        haslo,
        placowka,
        handleChange,
    } = props;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field inline>
          <label inline> Imiona: </label>
          <input name="imiona" type="text" value={imiona} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Nazwisko:</label>
          <input name="nazwisko" type="text" value={nazwisko} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Pesel:</label>
          <input name="pesel" type="text" value={pesel} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Login:</label>
          <input name="login" type="text" value={login} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Haslo:</label>
          <input name="haslo" type="password" value={haslo} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Id placówki:</label>
          <input name="placowka" type="text" value={placowka} onChange={handleChange} />
        </Form.Field>
        
        <Form.Field inline label='Rola' control='select'>
          <option value='PracownikPlacowki'>Pracownik Placówki</option>
          <option value='KierownikPlacowki'>Kierownik Placówki</option>
          <option value='PracownikCentrali'>Pracownik Centrali</option>
          <option value='AdministratorCentrali'>Administrator Centrali</option>
        </Form.Field>
        
        <input type="submit" value="Wyślij" />
      </Form>
    );
};
export default KontaFormView;