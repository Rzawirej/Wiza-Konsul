import React from 'react';

const SprawyList= (props) =>
{
  const sprawyLista=  props.sprawy.map((sprawa) => {
  return <li key={sprawa.id}>
      {sprawa.imie}  {sprawa.nazwisko}
  </li>
    });
    return <ul>{sprawyLista}</ul>;
};
export default SprawyList;