import React, { useState } from 'react';
import "./search-bar.css"

function SearchBar({ toBeSearchedBookName, setToBeSearchedBookName, setStartBookLimit, setEndBookLimit }) {

    const handleInputChange = (event) => {
        setToBeSearchedBookName(event.target.value);
        setStartBookLimit(0);
        setEndBookLimit(10);
    };

    return (
        <div className='search-bar-div'>
            <div className='search-bar-input-div'>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Search..."
                    value={toBeSearchedBookName}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default SearchBar;
