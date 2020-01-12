import React from 'react'
import MenuPView from './MenuPView';

class MenuP extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleAdd=props.handleAdd;
        this.handleNI=this.handleNI.bind(this);
        this.changeView=this.changeView.bind(this);
    }

    handleAdd()
    {
        alert('dziala');
    };
    handleNI()
    {
        alert('not implemented');
    }
    changeView()
    {
        console.log("dziala");
    }

    render()
    {
        return(
                <MenuPView handleAdd={this.handleAdd} handleNI={this.handleNI}/>

        );
    }
}
export default MenuP;