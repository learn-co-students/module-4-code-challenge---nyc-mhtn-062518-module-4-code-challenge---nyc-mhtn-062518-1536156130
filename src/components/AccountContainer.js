import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filteredTransactions: transactions,
      input: ""
    }
  }

  componentDidMount() {
    let URL = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(URL).then(res => res.json()).then(data => this.setState({ transactions: data}))
  }

  handleChange = event => {
    // console.log(event.target.value)
    event.persist()
    let filtered = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(event.target.value))
    console.log(filtered)

    this.setState({
      ...this.state,
      filteredTransactions: filtered,
      input: event.target.value
    } )
    // () => console.log("setting new state:,", this.state)
  }

  render() {
    // console.log("Props & state in Account", this.props, this.state)
    return (
      <div>
        <Search handleChange={this.handleChange} input={this.state.input} />
        <TransactionsList transactions={this.state.filteredTransactions}  />
      </div>
    )
  }
}

export default AccountContainer
