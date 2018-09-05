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

    this.state={
      transactions: []
    }
  }

//Notes: my data is still showing the local data and not the link's data. I'm trying to fetch those in my ComponentDidMount

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
}

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      transactions: this.state.transactions.includes(event.target.value)
    })
  }

  render() {
console.log(this.state)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
