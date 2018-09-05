import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions").then(res => res.json()).then(data => this.setState({transactions: data, transactionsToDisplay: data}))
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  showTransactions = () => {
    let newArray = this.state.transactions.filter(transaction => transaction.category.includes(this.state.searchTerm))
    return newArray
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactionsToDisplay={this.showTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
