import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const BANKAPI = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    // initial transactions state will be set to data in ../src.transactionsData
    this.state = {
      transactions: transactions,
      search: ''
    }

  }

  //fetch bank data to render on page
  fetchBank = () => fetch(BANKAPI).then(r => r.json()).then(transactions => this.setState({transactions}))


  // fetches bank data, filters by search, and sets state.transactions to filtered data
  searchBankAPI = () => {
    fetch(BANKAPI)
      .then(r => r.json())
      .then( data => {
        let transactions = data.filter(transaction => {
        if (transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase())) {
          return transaction
        }
      })
      this.setState({transactions})
      return
    })
  }

  // once mounted/loaded, show all bank transactions
  componentDidMount() {
    this.fetchBank()
  }

  // handle search change and fetch data by search in description/category
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.searchBankAPI()
  }


  render() {

    return (
      <div>
        <Search search={this.state.search} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
