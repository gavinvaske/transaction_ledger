import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Transaction from '../Transaction/Transaction';

export default function TransactionList(props) {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const transactionsFromDatabase = await axios.get('http://localhost:8080/transactions')

    setTransactions(transactionsFromDatabase.data);
  }

  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <div id='transaction-list'>
      {transactions && transactions.map((transaction) => <Transaction {...transaction} />)}\
    </div>
  );
}