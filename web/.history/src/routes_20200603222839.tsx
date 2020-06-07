//Browser router é o mais utilizado para utilizar rotas como barra no browser
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes = () => {
  return (
    //exact serve para verificar o caminho com uma igualdade ao envez de contains
    <BrowserRouter>
      <Route component={Home} path="/" exact></Route>
      <Route component={CreatePoint} path="/create-point"></Route>
    </BrowserRouter>
  );
};

export default Routes;
