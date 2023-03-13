import React from 'react';
import { NavLink } from 'react-router-dom';
// import cart from './features/cart';

const Navigation = ({cart}) => {
  return (
    <nav>
      <ul className='top-menu'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart ({cart.reduce((acc, item) => { 
          return acc + item.quantity
          }, 0)})</NavLink></li>
        <li><NavLink to='/checkout'>Checkout</NavLink></li>   
      </ul>     
    </nav>
  )
}


export default Navigation;