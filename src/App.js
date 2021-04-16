import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History.js";
import NewTransaction from "./components/NewTransaction";

function App() {
  useEffect(() => {
    const json = localStorage.getItem("transactions");
    const savedTransactions = JSON.parse(json);
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const json = JSON.stringify(transactions);
    localStorage.setItem("transactions", json);
  }, [transactions]);

  const addTransaction = (transaction) => {
    const id = transactions.length + 1;
    const newTransaction = { id, ...transaction };
    setTransactions([...transactions, newTransaction]);
  };

  function removeTransaction(id) {
    const afterDeleteTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions([...afterDeleteTransactions]);
  }

  return (
    <>
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <History
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
      <NewTransaction addTransaction={addTransaction} />
    </>
  );
}

export default App;
