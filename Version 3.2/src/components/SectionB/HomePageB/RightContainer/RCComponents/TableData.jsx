
import React from 'react'
import '../rightcontainer.module.css'

const TableData = () => {
  return (

    <div className="second-page-div">
      <div className="table-div">
        <table>
          <tr className="table-heading">
            <th>Sr No.</th>
            <th>Cash</th>
            <th>Table</th>
          </tr>
          <tr>
            <td>Tax 5.25%</td>
            <td></td>
            <td>$23</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td></td>
            <td>$450</td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td>$473.63</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TableData