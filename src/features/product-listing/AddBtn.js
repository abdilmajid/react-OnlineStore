import React from 'react';
import { Button } from 'react-bootstrap';

const AddBtn = (props) => {
  return (
    <Button
      style={{outline: 'none'}} 
      onClick={() => props.addToCart(props.product)}
    >Add to cart ({
      (props.cartItem && props.cartItem.quantity) || 0
    })</Button>
  )
}



export default AddBtn;