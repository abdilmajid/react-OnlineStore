import React from 'react';
import Order from '../features/order';

const OrdersPage = (props) => {
  return (
    <div>
      <h2>My Orders</h2>
      <Order id={props.match.params.id}/>
    </div>
  )
}



export default OrdersPage;