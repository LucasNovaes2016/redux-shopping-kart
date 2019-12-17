import React from "react";
import { ProjectInfo } from "./jumbotron";
import { ProductList } from "./productslist";
import { useSelector } from 'react-redux'

export const MainPage = () => {

  const storeProducts = useSelector(state => state.shopping.store_products);
  
  return (
    <>
      <ProjectInfo />
      <ProductList products={storeProducts} />
    </>
  );
};
