import React from 'react';
import { connect } from 'react-redux';

import Cart from '../cart';
import CheckoutForm from '../checkout/form';
import fetchApi from '../../modules/fetch-api';



const apiCall = 'http://localhost:4001'

const submitOrder = (values, cart) => {
  const { email, name } = values.order
    fetchApi('post', `${apiCall}/orders`, { //pass order key to api
    orders: {
      name,
      email,
      order_items: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  })
  .then(json => {
    if(json.errors){
      alert('Something Went Wrong!')
      return json;
    }
    console.log('test');
    document.location.href = `/orders/${json.id}`
    localStorage.clear()
  })
}

const Checkout = (props) => {
  const { cart } = props
  return (
    <div>
      <div className='checkout'>
        <Cart />
      </div>
      <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}



export default connect(mapStateToProps)(Checkout);