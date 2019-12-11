import React from "react";

export const ProductItem = ({ product }) => {
  const [productQuantity, setProductQuantity] = React.useState(0);
  const [addMode, setAddMode] = React.useState(false);

  const addProductToKart = () => {
    console.log("Adicionar produto ao carrinho quantidade = ", productQuantity);
    setAddMode(false);
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="font-weight-bold">R$ {product.price}</p>
          {addMode ? (
            <div className="mt-2">
              <input
                type="number"
                className="form-control small-input my-2"
                value={productQuantity}
                onChange={e => {
                  if (e.target.value === "") {
                    setProductQuantity(0);
                  } else if (e.target.value >= 0) {
                    setProductQuantity(parseInt(e.target.value));
                  }
                }}
              />
              <button
                href="#"
                className="btn btn-success btn-block rounded-0 my-2"
                onClick={addProductToKart}
              >
                Adicionar Quantidade
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                href="#"
                className="btn btn-block btn-primary rounded-0"
                onClick={() => {
                  setAddMode(true);
                }}
              >
                <i
                  className="fa fa-shopping-cart fa-lg mr-2"
                  aria-hidden="true"
                ></i>
                Adicionar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// (
//   <div className="mt-2">
//     <input
//       type="number"
//       className="form-control small-input my-2"
//       value={productQuantity}
//       onChange={e => {
//         if (e.target.value == "") {
//           setProductQuantity(0);
//         } else if (e.target.value >= 0) {
//           setProductQuantity(e.target.value);
//         }
//       }}
//     />
//     <button
//       href="#"
//       className="btn btn-success btn-block rounded-0 my-2"
//       onClick={addProductToKart}
// //     >
//       Adicionar Quantidade
//     </button>
//   </div>
// ) : (
//   <div className="text-center">
//     <button
//       href="#"
//       className="btn btn-block btn-primary rounded-0"
//       onClick={setAddMode(true)}
//     >
//       <i
//         className="fa fa-shopping-cart fa-lg mr-2"
//         aria-hidden="true"
//       ></i>
//       Adicionar
//     </button>
//   </div>
// )
