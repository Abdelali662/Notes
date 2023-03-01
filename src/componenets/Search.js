import React from 'react'
import { TbSearch } from "react-icons/tb";
const Search = ({handleSearch}) => {
  return (
    <div className='search'>
        <TbSearch className="search-icon" />
        <input onChange={(event)=>handleSearch(event.target.value)} type="text"/>
    </div>
  )
}

export default Search