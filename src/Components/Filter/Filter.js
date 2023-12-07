import React from 'react';
import './Filter.css';
import searchIcon from "../../Assets/search-icon.svg";

function Filter({searchValue, setSearchValue}) {
  return (
    <div className='search-container'>
      <input 
      placeholder="Buscar..."
      className='ToDoSearch'
      value={searchValue}
      onChange={(event) =>
        {setSearchValue(event.target.value);}
      }
      />
      <img className='search-icon' src={searchIcon} alt='search icon'/>
    </div>
   
  )
}

export {Filter};