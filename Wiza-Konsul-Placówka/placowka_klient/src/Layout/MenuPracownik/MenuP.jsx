import React from 'react'
import MenuPView from './MenuPView';

class MenuP extends React.Component
{
    constructor(props)
    {
        super(props)
        
        
        this.handleNI=this.handleNI.bind(this);
        
    }

    
    handleNI()
    {
        alert('not implemented');
    }
   
    render()
    {
        return(
                <MenuPView handleAdd={this.props.menu} handleNI={this.handleNI}/>

        );
    }
}
export default MenuP;