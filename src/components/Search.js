import React, { Component } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => this.props.handleChange(this.state.value))
  }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text" onChange={this.handleChange} value={this.state.value}
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
