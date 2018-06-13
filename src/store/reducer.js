import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      } 
    case actionTypes.STORE_RESULT:
      return {
        ...state, // deconstruct state to update an object immutably
        results: state.results.concat({ id: new Date(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
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