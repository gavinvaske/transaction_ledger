import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import TransactionList from '../TransactionList/TransactionList';
import Homepage from '../Homepage/Homepage';
import CreateTransaction from '../createTransaction/CreateTransaction';
import Navbar from '../Navbar/Navbar';

export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/transactions' element={<TransactionList />}></Route>
              <Route path='/transactions/new' element={<CreateTransaction />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    );
}