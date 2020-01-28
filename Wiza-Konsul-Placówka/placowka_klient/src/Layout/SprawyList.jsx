import React from 'react';

class SprawyList extends React.Component
{
  constructor (props)
{
super(props)

}

render(){
  
 try{
  const sprawyLista=  this.props.sprawy.map((sprawa) => {
  return <div role="listitem" className="item" style={{borderBottom:'1px solid blue'}}  key={sprawa.identyfikator} onClick={()=>{this.props.wybierzSprawę(sprawa.identyfikator)}}>
          <div className="content">ID: {sprawa.identyfikator}     Imiona: {sprawa.imiona}    Nazwisko: {sprawa.nazwisko}    Cel wydania: {sprawa.celWydania}     Rodzaj wizy: {sprawa.rodzajWizy}</div>
         </div>
    });
    return ( <div role="list" className="ui selection middle aligned list"  style={{height:'60%' }}>{sprawyLista} </div>);
  }
  catch(err)
  {
    console.log(err);
    return null;
  }
  
  
}
}
export default SprawyList;
