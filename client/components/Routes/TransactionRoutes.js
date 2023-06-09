import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateTransaction from '../Transactions/CreateTransaction/CreateTransaction';
import TransactionList from '../Transactions/TransactionList/TransactionList';

export function TransactionRoutes() {
    return <Routes>
        <Route index element={<TransactionList />}></Route>
        <Route path='new' element={<CreateTransaction />}></Route>
    </Routes>
}