import React from "react";
import { useSelector } from "react-redux";

export default function MyProducts() {
  const purchasedProducts = useSelector(
    state => state.shopping.purchased_products
  );

  console.log("purchasedProducts", purchasedProducts);

  return <div>My Products Component...</div>;
}
