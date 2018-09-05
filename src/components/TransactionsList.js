import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  // console.log("props are", props);
  const allTransactions = props.transactions.map(trans => {
    return <Transaction transaction={trans} key={trans.posted_at} />
  })
  // console.log(allTransactions);

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

        {allTransactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
