import React from "react";

const History = ({ transactions, removeTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(function (item) {
          return (
            <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
              {" "}
              {item.text}
              <span>${item.amount}</span>
              <button
                className="delete-btn"
                onClick={(e) => removeTransaction(item.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default History;
