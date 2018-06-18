import * as actionTypes from './actionTypes';

export const saveResult = (counter) =>   {
  return {
    type: actionTypes.STORE_RESULT,
    counter
  };
}

export const storeResult = (counter) => {
  return dispatch => { // dispatch here is injected by redux thunk which allows us to do some asynchronous task and execute the action once complete
    setTimeout(() => {
      dispatch(saveResult(counter));
    }, 2000);
  }
};

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId
  };
};