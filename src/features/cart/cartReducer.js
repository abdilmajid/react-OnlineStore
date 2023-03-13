//helper function that goes over all items in cart and returns all cart items that don't match the current item were trying to add
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
// helper function that returns items that match current item were trying to add, returns array of one item
const itemInCart = (cart, item) =>  cart.filter(cartItem => cartItem.id === item.id)[0]


//...cartWithoutItem(cart, item) => are all items previously in cart except for current item were trying to add
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
} 

const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)]
} 



const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload);
    case 'REMOVE':
      return removeFromCart(state, action.payload)
    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)
    default:
      return state;            
  }
}



export default cartReducer;