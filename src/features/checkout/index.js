import React from 'react';
import { connect } from 'react-redux';

import Cart from '../cart';
import CheckoutForm from '../checkout/form';
import fetchApi from '../../modules/fetch-api';

const submitOrder = (values, cart) => {
  const { email, name } = values.order
  // Post orders to API
  fetchApi('post', 'http://student-example-api.herokuapp.com/v1/orders.json', { //pass order key to api
    order: {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  }).then(json => {
    if(json.errors){
      alert('Something Went Wrong!')
      return json;
    }
    console.log('Values:',values)
    console.log('Cart:',cart)
    document.location.href = `/orders/${json.id}`
  })
}

const Checkout = (props) => {
  const { cart } = props
  return (
    <div>
      <div className='checkout'>
        <Cart />
      </div>{
// submitOrder passes values from reduxForm and cart
      }
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