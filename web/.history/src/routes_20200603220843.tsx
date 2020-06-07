//Browser router é o mais utilizado para utilizar rotas como barra no browser
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/"></Route>
    </BrowserRouter>
  );
};

export default Routes;
