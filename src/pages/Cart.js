import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from '../features/cart';

const CartPage = (props) => {
  return (
    <div>
      <h1>My Cart</h1>
      <Cart key={props.id}/>
      <div>
        <NavLink to='/'>
          <Button className='go-back'>Back</Button>
        </NavLink>
        <NavLink to='/checkout'>
          <Button className='go-checkout'>Check-Out</Button> 
        </NavLink>
      </div>
    </div>
  )
}



export default CartPage;