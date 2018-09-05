import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions: [],
      searchTerm: ""
    }
  }

  componentDidMount = () => {
    fetch(API).then(resp => resp.json()).then(data => this.setState({...this.state, transactions: data}))
  }

  handleChange = (event) => {
    this.setState({...this.state, searchTerm: event.target.value}, () => console.log(this.state))
  }

  filterTransactions = () => {
    if (this.state.searchTerm === "") {
      return this.state.transactions
    } else {
      return this.state.transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
    }
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filterTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
