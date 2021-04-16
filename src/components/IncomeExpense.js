import React from "react";

const IncomeExpense = ({ transactions }) => {
  const income = transactions
    .reduce(
      (arr, item) => (item.amount > 0 ? (arr += parseFloat(item.amount)) : arr),0)
    .toFixed(2);

  const expense = transactions
    .reduce((arr, item) => (item.amount < 0 ? (arr -= item.amount) : arr), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
