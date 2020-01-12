import React from 'react';

const SprawyList= (props) =>
{
    const
    {
       handleOnClick,
       
       sprawy
    }=props;

    const sprawyLista= sprawy.map((sprawa) => {
        return <div role="listitem" class="item" style={{borderBottom:'1px solid blue'}}  key={sprawa.id} onClick={handleOnClick}>
                <div class="content">{sprawa.imie}  {sprawa.nazwisko}</div>
               </div>
          });
return(
 
    <div role="list" class="ui selection middle aligned list" >{sprawyLista} </div>
);
};
export default SprawyList;