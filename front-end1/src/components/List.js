import React from 'react';

const List = ({ items, onItemClick }) => {
    return (
        <div className="list-container">
            <ul className="list">
                <li className="list-header">
                    <span className="list-header-name">Name</span>
                    <span className="list-header-rating">Rating</span>
                </li>
                {items.map(item => (
                    <li key={item.id} className="list-item" onClick={() => onItemClick(item)}>
                        <span className="list-item-name">{item.name}</span>
                        <span className="list-item-rating">{item.rating}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
