import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
    return updateObject(state, {
      results: state.results.concat({ 
        id: new Date(), 
        value: action.counter})
    })
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => { // use filter to return array immutably
        return result.id !== action.resultId
      });
      return updateObject(state, {results: updatedArray});
    default:
      return state;
  }
}

export default resultsReducer;