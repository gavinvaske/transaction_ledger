import React from 'react';
import { useNavigate } from 'react-router-dom';
import './createTransaction.scss'

export default function CreateTransaction(props) {
    const Navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        alert('You attempted to create a post')
        Navigate('/transactions');
    }

    return (
        <form id='create-transaction'>
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' name='description' />

            <label htmlFor='amount'>Amount:</label>
            <input type='text' id='amount' name='amount' />
            
            <button onClick={onSubmit}>Create Transaction</button>
        </form>
    );
}