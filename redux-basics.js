const redux = require('redux'); // node method of importing
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {

  if(action.type === 'INCREMENT_COUNTER') {
    return {
      ...state, // use spread operator to copy state to operate on it immutably
      counter: state.counter + 1
    }
  }

  if(action.type === 'ADD_TO_COUNTER') {
    return {
      ...state, // use spread operator to copy state to operate on it immutably
      counter: state.counter + action.value
    }
  }

    return state;
};

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INCREMENT_COUNTER'}); // MUST have a type, payload is optional
// store.dispatch({ type: 'ADD_TO_COUNTER', payload: {}}); // can be a payload object
// store.dispatch({ type: 'ADD_TO_COUNTER', value, name, id}); // can be a list of variables
store.dispatch({ type: 'ADD_TO_COUNTER', value: 10});
// console.log(store.getState());


