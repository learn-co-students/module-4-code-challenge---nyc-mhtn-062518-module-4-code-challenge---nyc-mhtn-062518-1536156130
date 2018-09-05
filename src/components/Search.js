import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredTransaction: this.props.filtered
    input: ""}
  }

//I was hung up with a typo when trying to pass props to Transaction for most of the exam, I was seeing my props logging  in Trans. List but they weren't going through to Transactions. The was a typo in my constuctor in Container. i can get the filter working with 15 minutes

  handleChange = event => {
  event.persist()
  this.setState({
    ...this.State,
    filtered: filtered
    filteredTransaction: event.target.value
  })
}

  render() {
    // console.log(this.state)
    // console.log(this.props)
    return (
      <div className="ui huge fluid icon input">
        <input onChange={this.handleChange}
          value={this.state.filteredTransaction}
          type="text"
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
