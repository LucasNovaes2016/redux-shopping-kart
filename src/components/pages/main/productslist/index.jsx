import React from "react";

export const ProductList = () => {
  return (
    <>
      <div className="row mt-1">
        <div className="col-md-6 col-lg-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title text-center">Playstation 4</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="font-weight-bold">R$ 1799,00</p>
              <div className="text-center">
                <a href="#" className="btn btn-block btn-primary rounded-0">
                  <i
                    className="fa fa-shopping-cart fa-lg mr-2"
                    aria-hidden="true"
                  ></i>
                  Adicionar
                </a>
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  className="form-control small-input my-2"
                  value="0"
                  min="0"
                  max="10"
                  onkeydown="return false"
                />
                <a
                  href="#"
                  className="btn btn-success btn-block rounded-0 my-2"
                >
                  Adicionar Quantidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary rounded-0">
          <i className="fa fa-plus-circle mr-2" aria-hidden="true"></i>Mais
          Resultados
        </button>
      </div>
    </>
  );
};
