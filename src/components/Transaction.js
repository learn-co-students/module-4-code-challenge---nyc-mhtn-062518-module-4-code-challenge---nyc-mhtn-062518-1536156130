import React from 'react'

const Transaction = (props) => {
  console.log('this is lne', props)
  return (
    <tr>
      <td>{props.transactions.posted_at}</td>
      <td>{props.transactions.description}</td>
      <td>{props.transactions.category}</td>
      <td>{props.transactions.amount}</td>
    </tr>
  )
}

export default Transaction
