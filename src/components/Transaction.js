import React from 'react'

const Transaction = (props) => {
  console.log(props.posted)
  const date = props.posted.forEach((post) => <td>{post}</td>)
  console.log(date)



  return (
    <tr>
      <td>{props.posted}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction
