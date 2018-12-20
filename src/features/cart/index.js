import React from 'react';
import { connect } from 'react-redux';
import { Button, Table} from 'react-bootstrap';

//Stops items from moving up and down, sorts items by id
// const sortItem = (items) => {
//   return items.sort((a, b) => {
//     return a.id < b.id
//   })
// }

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const itemTotal = this.props.cart.price.reduce(reducer)




const Cart = (props) => {

  const itemTotal = props.cart;
  const itemTotals = itemTotal.reduce((all, item, index) => {
    all += (item.quantity * item.price);
    const total = parseFloat(all.toFixed(2));
    return total;
  }, 0)

  return (
  <div>
    <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            props.cart.map(item => <tr>
                <td>
                <img
                    height={32} 
                    src={item.image}
                    alt='item'/> 
                 {`--  ${item.name}`}    
                </td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
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
      <h2>Total: ${itemTotals} </h2><br/>
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
    addToCart: (item) => {dispatch({ type: 'ADD', payload: item})},
    removeFromCart: (item) => {dispatch({ type: 'REMOVE', payload: item})},
    removeAllFromCart: (item) => {dispatch({ type: 'REMOVE_ALL', payload: item})}
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(Cart);