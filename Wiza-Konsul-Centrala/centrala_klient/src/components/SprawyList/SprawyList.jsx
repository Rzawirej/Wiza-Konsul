import React from 'react';

const SprawyList= (props) =>
{
  try{
  const sprawyLista=  props.sprawy.map((sprawa) => {
  return <li key={sprawa.id}>
      {sprawa.imie}  {sprawa.nazwisko}
  </li>
    });
    return <ul>{sprawyLista}</ul>;
  }
  catch(err)
  {
    console.log(err);
    return null;
  }
};
export default SprawyList;