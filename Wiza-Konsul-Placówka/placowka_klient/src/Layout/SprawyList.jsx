import React from 'react';

class SprawyList extends React.Component
{
  constructor (props)
{
super(props)
this.state={sprawy:[]}
}

render(){
  
 try{
  const sprawyLista=  this.state.sprawy.map((sprawa) => {
  return <div role="listitem" className="item" style={{borderBottom:'1px solid blue'}}  key={sprawa.id} onClick={()=>{console.log(sprawa.imie)}}>
          <div className="content">{sprawa.imie}  {sprawa.nazwisko}</div>
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
