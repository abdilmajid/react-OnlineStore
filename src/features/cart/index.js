import React from 'react';
import { connect } from 'react-redux';

//Stops items from moving up and down, sorts items by id
const sortItem = (items) => {
  return items.sort((a, b) => {
    return a.id < b.id
  })
}



const Cart = (props) => {
  return <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          sortItem(props.cart).map(item => <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  onClick={() => props.addToCart(item)}
                >+</button>
              </td>
              <td>
              <button
                onClick={() => props.removeFromCart(item)}
              >-</button>
              </td>
              <td>
                <button
                  onClick={() => props.removeAllFromCart(item)}
                >Remove All</button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {dispatch({ type: 'ADD', payload: item})},
    removeFromCart: (item) => {dispatch({ type: 'REMOVE', payload: item})},
    removeAllFromCart: (item) => {dispatch({ type: 'REMOVE_ALL', payload: item})}
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(Cart);