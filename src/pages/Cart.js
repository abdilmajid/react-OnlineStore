import React from 'react';
import Cart from '../features/cart';

const CartPage = (props) => {
  return (
    <div>
      <h1>My Cart</h1>
      <Cart key={props.id}/>
    </div>
  )
}



export default CartPage;