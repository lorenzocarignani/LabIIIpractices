import React from "react";
import "./Table.css";

const Table = ({ netIcomes }) => {
  const averageIncome = netIcomes.reduce((a, b) => a + b.income, 0);
  const total = averageIncome / netIcomes.length;
  return (
    <div>
      <table className="table">
        <thead>
          <th>Brand</th>
          <th>Income</th>
        </thead>
        <tbody>
          {netIcomes.map((br, index) => (
            <tr key="index + 1">
              <td>{br.brand}</td>
              <td>{br.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Average total income: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Table;
