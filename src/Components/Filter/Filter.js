import React from 'react';
import './Filter.css';
import searchIcon from "../../Assets/search-icon.svg";

function Filter() {
  return (
    <div className='search-container'>
      <input 
      placeholder="Buscar..."
      className='ToDoSearch' 
      />
      <img className='search-icon' src={searchIcon} alt='search icon'/>
    </div>
   
  )
}

export {Filter};