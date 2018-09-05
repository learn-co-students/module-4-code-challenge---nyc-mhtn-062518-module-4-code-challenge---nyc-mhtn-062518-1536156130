import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchedTransactions: [],
      searchTerm: ''
    }

  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(data => this.setState({
        transactions: data,
        searchedTransactions: data
      })
    )
  }

  handleChange = event => {
    let searchTransactions = this.state.transactions.filter(transaction=>{
      return transaction.category.toLowerCase().includes(this.state.searchTerm)
    })
    this.setState({searchedTransactions: searchTransactions, searchTerm: event.target.value})
  }


  render() {
    console.log('search Transactions', this.state.searchedTransactions)
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <TransactionsList transactions={this.state.searchedTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
