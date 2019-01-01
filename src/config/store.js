import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import cartReducer from '../features/cart/cartReducer';
import productsReducer from '../features/product-listing/reducer';

//Save to Local storage
function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  // persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

//Saves to local Storage  
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;