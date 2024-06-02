import React from 'react';

const Sort = ({ onSort }) => {
    return (
        <select onChange={e => onSort(e.target.value)}>
            <option value="asc">Name Ascending</option>
            <option value="desc">Name Descending</option>
            <option value="rate asc">Rating Ascending</option>
            <option value="rate desc">Rating Descending</option>
        </select>
    );
};

export default Sort;
