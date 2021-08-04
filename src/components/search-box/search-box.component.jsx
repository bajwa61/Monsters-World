import React from 'react';
import './search-box.style.css';

export const SearchField=({placeholder,handleChange}) =>{
    return(
        <input 
            onChange={handleChange} 
            type="search" 
            name="searchField" 
            placeholder={placeholder}    
        />
    )
}