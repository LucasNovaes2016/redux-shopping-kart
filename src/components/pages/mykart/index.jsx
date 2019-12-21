import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_PRODUCT_FROM_KART,
  BUY_PRODUCTS_FROM_KART
} from "../../../core/redux/types";
import { Link, Redirect } from "react-router-dom";

export default function MyKart() {
  const [productsPurchased, setProductsPurchased] = React.useState(false);

  let finalPrice = 0;

  const storeKartProducts = useSelector(state => state.shopping.kart_products);

  const dispatch = useDispatch();

  const removeProductFromKart = cod => {
    dispatch({ type: REMOVE_PRODUCT_FROM_KART, payload: cod });
  };

  const buyProductsFromKart = () => {
    dispatch({ type: BUY_PRODUCTS_FROM_KART });
    setProductsPurchased(true);
  };

  if (productsPurchased) {
    return <Redirect to="/meus-produtos" />;
  }

  return (
    <table className="table shadow mt-4">
      <thead className="thead-dark">
        <tr className="text-center bg-dark">
          <th colSpan="6">MEU CARRINHO</th>
        </tr>
        <tr>
          <th scope="col">COD</th>
          <th scope="col">Produto</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Preço (Unidade)</th>
          <th scope="col">Preço Total</th>
          <th scope="col" className="text-center">
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {storeKartProducts.length === 0 ? (
          <tr>
            <td colSpan="6"> {"Não há itens no carrinho... :("} </td>
          </tr>
        ) : (
          storeKartProducts.map(item => {
            console.log("item = ", item);
            finalPrice += item.price * item.quantity;
            return (
              <tr key={item.cod}>
                <td> {item.cod} </td>
                <td> {item.name} </td>
                <td> {item.quantity} </td>
                <td> {item.price} </td>
                <td> {(item.price * item.quantity).toFixed(2)} </td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger rounded-0"
                    onClick={() => {
                      removeProductFromKart(item.cod);
                    }}
                  >
                    <i
                      className="fa fa-trash fa-lg mr-2"
                      aria-hidden="true"
                    ></i>
                    Remover
                  </button>
                </td>
              </tr>
            );
          })
        )}
        <tr className="font-weight-bold">
          <td colSpan="3"></td>
          <td>
            <h5> VALOR FINAL </h5>
          </td>
          <td>
            <h5>{"R$ " + finalPrice.toFixed(2)}</h5>
          </td>
          <td className="text-center">
            {storeKartProducts.length > 0 ? (
              <button
                className="btn btn-success btn-block rounded-0"
                onClick={buyProductsFromKart}
              >
                <i className="fa fa-money fa-lg mr-2" aria-hidden="true"></i>
                Comprar Produtos
              </button>
            ) : (
              <Link className="btn btn-primary btn-block rounded-0" to="/">
                <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Voltar para a loja
              </Link>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
