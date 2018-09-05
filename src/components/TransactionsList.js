import React from 'react'
import Transaction from './Transaction'
const TransactionsList = (props) => {

  //now realizing i should have done a function to go over each transaction  instead
  console.log(props)
  const posted = props.transaction.map(tran => tran.posted_at)
  const desc = props.transaction.map(tran => tran.description)
  const category = props.transaction.map(tran => tran.category)
  const amount = props.transaction.map(tran => tran.amount)

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
        <Transaction posted={posted} description={desc} category={category} amount={amount}/>
      </tbody>
    </table>
  )
}

export default TransactionsList
