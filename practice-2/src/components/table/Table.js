import React from "react";
import "./Table.css";

const Table = ({ netIncomes }) => {
  const averageIncome = netIncomes.reduce((a, b) => a + b.income, 0);
  const total = averageIncome / netIncomes.length;
  return (
    <div>
      <table className="table">
        <thead>
          <th>Brand</th>
          <th>Income</th>
        </thead>
        <tbody>
          {netIncomes.map((br, index) => (
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
