import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state, // deconstruct state to update an object immutably
        results: state.results.concat({ id: new Date(), value: action.counter})
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

export default resultsReducer;