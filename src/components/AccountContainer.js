

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {transactions: []}
  }

  componentDidMount() {
    let URL = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(URL).then(res => res.json()).then(data => this.setState({ transactions: data}))
  }

//   handleChange = event => {
//   event.persist()
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }


  render() {
    return (
      <div>
        <Search transactions={this.state.transactions} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
