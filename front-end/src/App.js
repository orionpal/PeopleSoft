import './App.css';

import React, { useState, useEffect } from 'react';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // TODO: change this to environment variable
  const API_URL = 'http://localhost:8080/api'

  useEffect(() => {
    fetch(`${API_URL}/employees`, {
      method: 'GET',
      credentials: 'include' // Include credentials in the request
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the data to check if it's valid
        setEmployees(data.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [API_URL]);

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const handleSort = order => {
    setSortOrder(order);
  };

  const handleItemClick = item => {
    alert(`Clicked on: ${item.name}`); // Handle item click
  };

  const filteredEmployees = employees
    .filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // These cases are defined in components/Sort.js
      switch (sortOrder) {
        case "asc":
          return a.name.localeCompare(b.name)
        case "desc":
          return b.name.localeCompare(a.name)
        case 'rate asc':
          return a.rating > b.rating
        case 'rate desc':
          return a.rating < b.rating
        default:
          console.log("sort not working as planned");

      }

    });

  return (
    <div className="app-container">
      <h1>Employee List</h1>
      <div className="controls-container">
        <Search onSearch={handleSearch} /> {/* Search component with handleSearch callback */}
        <Sort onSort={handleSort} /> {/* Sort component with handleSort callback */}
      </div>
      <List items={filteredEmployees} onItemClick={handleItemClick} /> {/* List component with filtered and sorted employees */}
    </div>
    // <div className="container">
    //   <h1>Employee List</h1>
    //   <div className="search-sort-container">
    //     <Search onSearch={handleSearch} />
    //     <Sort onSort={handleSort} />
    //   </div>
    //   <List items={filteredEmployees} />
    // </div>
  );
};

export default App;