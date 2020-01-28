import React from 'react';
import MenuKVIew from './MenuKVIew'
class MenuK extends React.Component{

    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<MenuKVIew handleTake={this.props.handleTake}/>)
    }
}
export default MenuK;