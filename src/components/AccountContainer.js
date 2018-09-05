import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(data => this.setState({data: data}))
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange.bind(this)}/>
        <TransactionsList data={this.state.data} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AccountContainer
