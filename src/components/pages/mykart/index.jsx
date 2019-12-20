import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { REMOVE_PRODUCT_FROM_KART } from '../../../core/redux/types';

export default function MyKart() {
  const storeKartProducts = useSelector(state => state.shopping.kart_products);

  const dispatch = useDispatch();


  const removeProductFromKart = (cod) => {
    console.log("produto cod = ", cod);
    dispatch({ type: REMOVE_PRODUCT_FROM_KART, payload: cod })
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
          storeKartProducts.map((item) => {
            return (
              <tr key={item.cod}>
                <td> {item.cod} </td>
                <td> {item.name} </td>
                <td> {item.quantity} </td>
                <td> {item.price} </td>
                <td> {item.price * item.quantity} </td>
                <td className="text-center">
                  <button type="button" className="btn btn-danger rounded-0" onClick={() => {removeProductFromKart(item.cod)}}>
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
            <h5>R$ 3396.00</h5>
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-success btn-block rounded-0"
            >
              <i className="fa fa-money fa-lg mr-2" aria-hidden="true"></i>
              Comprar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
