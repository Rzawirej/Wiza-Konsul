import React from 'react';
const SearchBar = (props) => {
    const {
        handleSubmit,
        input,
        handleChange,
    } = props;

return (
    <form onSubmit={handleSubmit}>
    <div style={{border:'2px solid black'}}>
        <input name="search" type="text" value={input} onChange={handleChange} />
        <input type="submit" value="Szukaj" />
    </div>
    </form>
    );
};
export default SearchBar;