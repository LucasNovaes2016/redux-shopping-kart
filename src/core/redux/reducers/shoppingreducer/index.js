import {
    GET_KART_PRODUCTS,
  } from '../../types';
  
  const initialState = {
    kart_products: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_KART_PRODUCTS:
          console.log("current state = ", state);
        return {
          ...state,
        };
      default:
        return state;
    }
  };