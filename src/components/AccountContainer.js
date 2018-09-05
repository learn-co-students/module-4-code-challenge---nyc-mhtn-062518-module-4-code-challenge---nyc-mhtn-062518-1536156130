import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    // state needs a searchTerm key
    this.state = {
      searchTerm: '',
      transactionsArray: []
    }

  }

  //fetch from src/transactionsData in componentDidMount after getting rendering working

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(resp => resp.json()).then(data => this.setState({transactionsArray: data}, () => console.log(this.state.transactionsArray)))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactionsArray} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
