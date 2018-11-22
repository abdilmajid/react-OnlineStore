import React from 'react'

const RemoveBtn = (props) => {
  return (
    <button 
      onClick={() => props.removeFromCart(props.cartItem)}
    >Remove item</button>
  )
}



export default RemoveBtn;