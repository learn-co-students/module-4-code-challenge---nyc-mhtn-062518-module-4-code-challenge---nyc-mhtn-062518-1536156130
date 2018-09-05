import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      searchTerm: '',
      searchType: 'description'
    }
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(data => this.setState({data: data}))
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  changeSearchType(e) {
    this.setState({searchType: e.target.value})
  }

  render() {
    return (
      <div>
        <div className='ui center aligned header'>
          <form onChange={e => this.changeSearchType(e)}>
            <label>
              <input
              type="radio"
              value="description"
              checked={this.state.searchType === 'description'}
              />
              search by description
            </label>
            <br/>
            <label>
              <input
              type="radio"
              value="category"
              checked={this.state.searchType === 'category'}
              />
              search by category
            </label>
          </form>
        </div>
        <Search handleChange={this.handleChange.bind(this)}/>
        <TransactionsList data={this.state.data} searchTerm={this.state.searchTerm} searchType={this.state.searchType}/>
      </div>
    )
  }
}

export default AccountContainer
