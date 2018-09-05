import React from 'react'

const Transaction = (props) => {
  // console.log('props in transaction', props)
  return (
    <tr>
      <td><p>{props.transaction.posted_at}</p></td>
      <td><p>{props.transaction.description}</p></td>
      <td><p>{props.transaction.category}</p></td>
      <td><p>{props.transaction.amount}</p></td>
    </tr>
  )
}

export default Transaction
