import Products from "../../../data/local";
import { ADD_PRODUCT_TO_KART, REMOVE_PRODUCT_FROM_KART } from "../../types";

const initialState = {
  store_products: Products,
  kart_products: [],
  purchased_products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_KART:
      let new_kart = state.kart_products;

      let found_product = false;

      for (let i = 0; i < new_kart.length; i++) {
        if (new_kart[i].cod === action.payload.product.cod) {
          new_kart[i].quantity += action.payload.productQuantity;
          found_product = true;
          i = new_kart.length;
        }
      }
      if (!found_product) {
        new_kart.push(
          Object.assign(
            {
              quantity: action.payload.productQuantity
            },
            action.payload.product
          )
        );
      }
      return {
        ...state,
        kart_products: new_kart
      };
    case ADD_PRODUCT_TO_KART:  
      return {
        ...state,
        kart_products: state.kart_products.filter((item) => item.cod !== action.payload.product_cod)
      };
    default:
      return state;
  }
};
