import React from 'react';
import { NavLink } from 'react-router-dom';
require('./navbar.scss');

export default function Navbar() {
    return (
      <header>
        
        <NavLink to='/'><span class="material-symbols-outlined">home</span></NavLink>
        <NavLink to='/transactions'>Transactions</NavLink>
        <NavLink to='/transactions/new'>Create Transaction</NavLink>
      </header>
    )
}