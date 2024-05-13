import React from 'react';
import './index.css';

const SearchBar = ({ onSearch }) => {
    const searchText = 'Type here to search';

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        onSearch(searchValue);
    };

    return (
        <div className="app-search-panel">
            <input
                placeholder={searchText}
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchBar;