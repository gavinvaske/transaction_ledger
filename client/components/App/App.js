import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../Homepage/Homepage';
import Navbar from '../Navbar/Navbar';
import { TransactionRoutes } from '../Routes/TransactionRoutes';

export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/transactions/*' element={<TransactionRoutes />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    );
}