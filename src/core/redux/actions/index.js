import {
    ADD_PRODUCT_TO_KART
  } from '../types';
  
  // Add Product to Kart
  export const addProductToKart = (product_payloadd) => {
    dispatch({
        type: ADD_PRODUCT_TO_KART,
        payload: product_payload,
      });
  };