import React from 'react';

const Search = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={e => onSearch(e.target.value)}
        />
    );
};

export default Search;
