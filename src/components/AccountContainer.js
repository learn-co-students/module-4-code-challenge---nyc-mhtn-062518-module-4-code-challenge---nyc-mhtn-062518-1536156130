import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const url = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      filteredTransactions: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch(url).then(res => res.json()).then(json => {
      this.setState({ transactions: json, filteredTransactions: json })
    })
  }

  handleChange = (event) => {
    // console.log("hello");
    let searchQuery = event.target.value
    // console.log(searchInput);
    let filteredTransactions = this.state.filteredTransactions.filter(trans => {
      return trans.description.toLowerCase().includes(searchQuery)
    this.setState({
      ...this.state,
      filteredTransactions: filteredTransactions
      })
    })
  }

  render() {
    // console.log("state is", this.state);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.filteredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
