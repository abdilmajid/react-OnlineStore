import React from 'react';
import ProductListItem from './ProductListItem';
import { cartItemsWithQuantity } from '../cart';

import { connect } from 'react-redux';


const ProductListing = (props) => {
  return (
    <div className='product-listing'>
      {
        props.products.map((product) => {
          {// JSONdata => Porducts(prop), addToCart and removeFromCart, are passed to ProductListItems.js as prop
          } return ( 
              <ProductListItem 
                  key={product.id} 
                  product={product}
                  addToCart={props.addToCart}
                  removeFromCart={props.removeFromCart}
                  cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
              />
            )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch({type: 'ADD', payload: item}),
    removeFromCart: (item) => dispatch({type: 'REMOVE', payload: item})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);