import React from 'react'
import TransactionsList from './TransactionsList'

const Transaction = (props) => {

  console.log("Transaction props", props.transdata)


    return (
      <div>
      <tr>
        <td>{props.transdata.posted_at}</td>
        <td>{props.transdata.description}</td>
        <td>{props.transdata.category}</td>
        <td>{props.transdata.amount}</td>
      </tr>
      </div>
    )

}


export default Transaction
