import React from 'react';

const SprawyList= (props) =>
{
  try{
  const sprawyLista=  props.sprawy.map((sprawa) => {
  return <li  style={{ borderBottom:'1px solid blue', listStyleType:'none' }} key={sprawa.id}>
      {sprawa.imie}  {sprawa.nazwisko}
  </li>
    });
    return <div style={{border:'1px solid red',margin: '5px'}}> <ul>{sprawyLista}</ul></div>;
  }
  catch(err)
  {
    console.log(err);
    return null;
  }
};
export default SprawyList;