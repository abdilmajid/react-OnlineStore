import React from 'react';
import { NavLink } from 'react-router-dom';
import cart from './features/cart';

const Navigation = (props) => {
  return (
    <nav>
      <ul className='top-menu'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart ({cart.length})</NavLink></li>
      </ul>
    </nav>
  )
}


export default Navigation;