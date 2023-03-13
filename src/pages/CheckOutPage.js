import React from 'react';
import Checkout from '../features/checkout';

const CheckoutPage = (props) => {
  return (
    <div>
      <h1>Checkout</h1>
      <Checkout key={props.id}/>
    </div>
  )
}



export default CheckoutPage;