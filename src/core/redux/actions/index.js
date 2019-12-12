import {
    GET_KART_PRODUCTS,
  } from '../types';
  
  // Get Kart Products
  export const getKartProducts = () => {
    dispatch({
        type: GET_KART_PRODUCTS,
      });
  };