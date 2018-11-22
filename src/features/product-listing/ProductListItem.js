import React from 'react';

import Addbtn from './AddBtn';
import RemoveBtn from './RemoveBtn'

const ProductListItem = (props) => {
  return (
    <div className='product-list-item'>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title= {props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>{
        // call function addToCart and pass argument props.product, this add the item to our state
      } <Addbtn 
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
          />
          {
            props.cartItem
              ? <RemoveBtn 
                cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart}/>
              : null
          }
      </div>
    </div>
  )
}


export default ProductListItem;