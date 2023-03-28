import React from 'react';
import { NavLink } from 'react-router-dom';
require('./navbar.scss');

export default function Navbar() {
    return (
      <header>
        <h1>Transaction Ledger</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/transactions'>Transactions</NavLink>
        <NavLink to='/transactions/new'>Create Transaction</NavLink>
      </header>
    )
}