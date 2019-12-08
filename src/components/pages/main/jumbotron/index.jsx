import React from 'react'

export const ProjectInfo = () => {
    return (
        <div className="jumbotron shadow my-3">
        <h1 className="display-5 text-center">Redux Shopping Kart Simulator</h1>
        <p className="lead">
          Pequena aplicação de carrinho de compras com funcionalidades simuladas
          por meio de react e da biblioteca de gerenciamento de estado Redux. Uma
          vez recarregada a pagina, os dados se perderão.{" "}
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <a className="btn btn-success btn-lg rounded-0" href="#" role="button">
            Começe a comprar!
          </a>
        </div>
      </div>
    )
}
