import { ADD_PRODUCT_TO_KART, REMOVE_PRODUCT_FROM_KART } from "../types";

// Add Product to Kart
export const addProductToKart = product_payload => {
  dispatch({
    type: ADD_PRODUCT_TO_KART,
    payload: product_payload
  });
};

// Add Product to Kart
export const removeProductFromKart = product_cod => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_KART,
    payload: product_cod,
  });
};
