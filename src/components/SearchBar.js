// src/components/SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar libros..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
