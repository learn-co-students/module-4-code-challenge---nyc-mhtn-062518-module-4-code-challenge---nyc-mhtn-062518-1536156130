import React from 'react'

const Transaction = ({transaction: {id, amount, category, description, posted_at}}) => {
  return (
    <tr >
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
