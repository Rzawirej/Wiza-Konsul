import React from 'react';


const MenuPView = (props)=>
{
    const{
        handleAdd,
        handleNI
    }=props;
   
    return(
        <div>      
           <button className="ui secondary button" onClick={handleAdd}>Dodaj</button>
            <button className="ui secondary button" onClick={handleNI}>Edytuj</button>      
            <button className="ui secondary button" onClick={handleNI}>Usuń</button>   
        </div>
        );
};


export default MenuPView;