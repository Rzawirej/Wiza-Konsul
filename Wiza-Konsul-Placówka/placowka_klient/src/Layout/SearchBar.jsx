import React from 'react';
import SearchBarView from './SearchBarView'

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={input: ''}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({
        [event.target.name]: event.target.value
        });
    }
    handleSubmit(event)
    {
       
        event.preventDefault();
        console.log(this.state.input)
    }

render()
{return (
    <SearchBarView
    handleSubmit={this.handleSubmit}
        input={this.state.input}
        handleChange={this.handleChange}
        />
);
}

}
export default SearchBar;