
import React from 'react';


const MenuKView = (props)=>
{
    const{
        handleTake,
       
    }=props;
   
    return(
        <div>      
           <button className="ui secondary button" onClick={handleTake}>Podejmij decyzje</button>
          
        </div>
        );
};


export default MenuKView;