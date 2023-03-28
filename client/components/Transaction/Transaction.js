import React from 'react';

export default function Transaction(props) {
  const {description, price} = props;

  return (
    <div id='transaction'>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}