import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../Homepage/Homepage';
import Navbar from '../Navbar/Navbar';
import { TransactionRoutes } from '../Routes/TransactionRoutes';
import NotFound from '../NotFound/NotFound';

export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/transactions/*' element={<TransactionRoutes />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    );
}