import React from "react";

const Balance = ({ transactions }) => {
  const total = transactions
    .map((item) => parseFloat(item.amount))
    .reduce((arr, item) => (arr += item), 0)
    .toFixed(2);

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 className="balance"> ${total} </h1>
    </div>
  );
};

export default Balance;
