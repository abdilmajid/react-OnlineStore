import React from 'react';
import { connect } from 'react-redux';
import { Button, Table} from 'react-bootstrap';

//Stops items from moving up and down, sorts items by id
const sortItem = (items) => {
  return items.sort((a, b) => {
    return a.id < b.id
  })
}



const Cart = (props) => {
  return <Table striped bordered condensed hover>
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
                <Button
                  onClick={() => props.addToCart(item)}
                >+</Button>
              </td>
              <td>
              <button
                style={{outline: 'none'}} 
                className='btn-remove-small'
                onClick={() => props.removeFromCart(item)}
              >-</button>
              </td>
              <td>
                <button
                  style={{outline: 'none'}} 
                  className='btn-remove-small'
                  onClick={() => props.removeAllFromCart(item)}
                >Remove All</button>
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
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