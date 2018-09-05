import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: transactions
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  // componentDidMount() {
  //   fetch('http://localhost.3000/transactions')
  //   .then( res => res.json() )
  //   .then(data => this.setState({transaction: data}))
  // }

  handleChange(event) {
    // your code here
  }

  render() {
    console.log("transactions form accountcoutnainer", transactions)
    return (
      <div>
        <Search />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
