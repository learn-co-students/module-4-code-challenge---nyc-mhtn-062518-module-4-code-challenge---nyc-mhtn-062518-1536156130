import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: transactions,
      show: transactions
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .this(res => res.json())
    .this(json => this.setState({
      transactions: json,
      show: json
    }))
    // changed something last minute, working with ELbin, functionality of the app works, just fixing the fetch
  }

  handleChange = (event) => {
    if (!event) {
      this.setState({
        ...this.state,
        show: this.state.transactions
      })
    } else {
      this.setState({
        ...this.state,
        show: this.state.transactions.filter(t => t.description.toLowerCase().includes(event) || t.category.toLowerCase().includes(event))
      })
    }
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList show={this.state.show} />
      </div>
    )
  }
}

export default AccountContainer
