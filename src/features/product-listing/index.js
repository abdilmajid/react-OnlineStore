import React, { Component} from 'react';
import ProductListItem from './ProductListItem';

import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';

const apiCall = process.env.REACT_APP_API_CALL

class ProductListing extends Component {
  //when component mounts it will do an async request to api
  componentDidMount() {
    const { loadProducts } = this.props
    fetchApi('get', `${apiCall}/products`)
      .then((json) => {
        loadProducts(json)
      })
  }

  render() {
    const { addToCart, removeFromCart, products, cart} = this.props
    return <div className='product-listing'>
        {
          products.map((product) => {
           return ( 
                <ProductListItem
                    key={product.id} 
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                />)
          })
        }
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: (products) => {dispatch({type: 'LOAD', payload: products})},
    addToCart: (item) => {dispatch({type: 'ADD', payload: item})},
    removeFromCart: (item) => {dispatch({type: 'REMOVE', payload: item})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);