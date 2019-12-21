import { ADD_PRODUCT_TO_KART, REMOVE_PRODUCT_FROM_KART, BUY_PRODUCTS_FROM_KART } from "../types";

// Add product to kart...
export const addProductToKart = product_payload => {
  dispatch({
    type: ADD_PRODUCT_TO_KART,
    payload: product_payload
  });
};

// Remove product from kart...
export const removeProductFromKart = product_cod => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_KART,
    payload: product_cod,
  });
};

// Buy all products from kart...
export const buyProductFromKart = () => {
  dispatch({
    type: BUY_PRODUCTS_FROM_KART,
  });
};

