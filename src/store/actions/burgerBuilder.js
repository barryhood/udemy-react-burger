import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

const setIngredients = (ingredients) => {
  console.log('setIng',ingredients);
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
}

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    console.log('initIng dispatch');
    axios.get( 'https://react-burger-91e96.firebaseio.com/ingredients.json' )
      .then( response => {
        // this.setState( { ingredients: response.data } );
        console.log('response.data',response.data);
        dispatch(setIngredients(response.data));
      } )
      .catch( error => {
        dispatch(fetchIngredientsFailed());
      } );

  }
};
