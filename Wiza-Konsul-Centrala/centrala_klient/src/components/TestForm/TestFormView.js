import React from 'react';
import {Form } from 'semantic-ui-react'
const KontaFormView = (props) => {
    const {
        handleSubmit,
        imie,
        nazwisko,
        handleChange,
    } = props;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field inline>
          <label inline> Imię: </label>
          <input name="imie" type="text" value={imie} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline>
          <label inline>Nazwisko:</label>
          <input name="nazwisko" type="text" value={nazwisko} onChange={handleChange} />
        </Form.Field>
        <input type="submit" value="Wyślij" />
      </Form>
    );
};
export default KontaFormView;