import React from "react";
import { ProjectInfo } from "./jumbotron";
import { ProductList } from "./productslist";

export const MainPage = ({products}) => {
  return (
    <>
      <ProjectInfo />
      <ProductList products={products} />
    </>
  );
};
