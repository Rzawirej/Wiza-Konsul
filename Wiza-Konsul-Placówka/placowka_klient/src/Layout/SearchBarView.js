import React from 'react';
const SearchBarView = (props) => {
    const {
        handleSubmit,
        input,
        handleChange,
    } = props;

return (
    <div>
    <form onSubmit={handleSubmit}>
    <div style={{border:'2px solid black'}}>
        <input name="input" type="text" value={input} onChange={handleChange} />

        <input type="submit" value="Szukaj" />
    </div>
    </form>
    </div>
    );
};
export default SearchBarView;