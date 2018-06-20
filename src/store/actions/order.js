import axios from '../../axios-orders';
import * as actionTypes from '../actions/actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post( '/orders.json', orderData )
    .then( response => {
        // this.setState( { loading: false } );
        // this.props.history.push( '/' );
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
    } )
    .catch( error => {
        // this.setState( { loading: false } );
        dispatch(purchaseBurgerFail(error))
    } );
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('/orders.json')
    .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
            fetchedOrders.push({
                ...res.data[key],
                id: key
            });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
        // this.setState({loading: false, orders: fetchedOrders});
    })
    .catch(err => {
        // this.setState({loading: false});
        dispatch(fetchOrdersFail(err));
    });
  }
}