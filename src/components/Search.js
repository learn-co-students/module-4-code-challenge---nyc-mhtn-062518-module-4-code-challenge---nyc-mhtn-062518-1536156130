import React from 'react'

const Search = ({handleChange, search}) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
        name="search"
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
