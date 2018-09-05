import React from 'react'

//I know I'm very close, my imput is controlled by state, but for some reason my filter isn't updating like I think it should. I went back and forth with setting this component to class-based, since the value changes when I type, but because handleChange is defined in the container I need to set state for the input there, if I want to access input within my handleChange function.

const Search = (props) => {
  // console.log("props in Search", props)
  return (
    <div className="ui huge fluid icon input">
      <input onChange={props.handleChange}
        value={props.input}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
