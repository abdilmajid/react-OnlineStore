import React from 'react'


const RemoveBtn = (props) => {
  return (
    <button
      style={{outline: 'none'}} 
      className='btn_remove'
      onClick={() => props.removeFromCart(props.cartItem)}
    >Remove item</button>
  )
}



export default RemoveBtn;