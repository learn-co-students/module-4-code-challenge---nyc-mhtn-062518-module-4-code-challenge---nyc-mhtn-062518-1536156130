import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  console.log(props.searchTerm)
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
        {
          props.data.map(t => {
            if (t.category.toLowerCase().includes(props.searchTerm)) {
              return (
                <Transaction
                  key={t.id}
                  posted_at={t.posted_at}
                  description={t.description}
                  category={t.category}
                  amount={t.amount}
                />
              )
            }

        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
