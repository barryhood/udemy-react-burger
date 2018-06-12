const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload.value
      } 
    case 'STORE_RESULT':
      return {
        ...state, // deconstruct state to update an object immutably
        results: state.results.concat({ id: new Date(), value: state.counter})
      }
    case 'DELETE_RESULT':
      const updatedArray = state.results.filter(result => { // use filter to return array immutably
        return result.id !== action.resultId
      });
      return {
        ...state,
        results: updatedArray
      }                 
    default:
      return state;
  }
}

export default reducer;