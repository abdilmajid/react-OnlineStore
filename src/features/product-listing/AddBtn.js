import React from 'react'

const AddBtn = (props) => {
  return (
    <button 
      onClick={() => props.addToCart(props.product)}
    >Add to cart ({
      (props.cartItem && props.cartItem.quantity) || 0
    })</button>
  )
}



export default AddBtn;