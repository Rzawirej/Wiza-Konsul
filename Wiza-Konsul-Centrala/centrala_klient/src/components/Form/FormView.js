import React from 'react';
const FormView = (props) => {
    const {
        handleSubmit,
        imie,
        nazwisko,
        handleChange,
    } = props;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input name="imie" type="text" value={imie} onChange={handleChange} />
        </label>
        <label>
          Nazwisko:
          <input name="nazwisko" type="text" value={nazwisko} onChange={handleChange} />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
};
export default FormView;