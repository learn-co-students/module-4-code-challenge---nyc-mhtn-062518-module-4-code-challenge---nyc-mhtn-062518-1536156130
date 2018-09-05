import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  // take bank info and map <Transaction /> component for each transaction
  const mapTransactions = () => props.transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {mapTransactions()}
      </tbody>
    </table>
  )
}

export default TransactionsList
