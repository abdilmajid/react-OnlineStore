import React from 'react';
import { connect } from 'react-redux';


const Checkout = (props) => {
  return (
    <div>
      
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}



export default connect(mapStateToProps)(Checkout);