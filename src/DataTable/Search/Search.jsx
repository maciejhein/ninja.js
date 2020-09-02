import React from 'react'

const Search = ({ onChange }) => {
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onChange} />
    </div>
  )
}

export default Search
