import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {transactions: [], search: ''}

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.handleChange = this.handleChange.bind(this)
    this.filterTransaction = this.filterTransaction.bind(this)
  }

  componentWillMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res => res.json()).then(data => this.setState({transactions: data}))
  }

  handleChange(event) {
    // your code here
    this.setState({search: event.target.value})
  }

  filterTransaction(){
    return this.state.transactions.filter(transaction => transaction.category.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filterTransaction()}/>
      </div>
    )
  }
}

export default AccountContainer
