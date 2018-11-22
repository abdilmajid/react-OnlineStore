

 const cartReducer = (state = [], {type, payload}) => {
  switch(type) {
    case 'ADD':
      return [...state, payload]
    case 'REMOVE':
      const firstMatchIndex = state.indexOf(payload);
      return state.filter((item, index) => index !== firstMatchIndex)
    default:
      return state;            
  }
}



export default cartReducer;