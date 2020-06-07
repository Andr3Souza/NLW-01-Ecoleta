import React, { useState } from "react";
import "./App.css";

import Header from "./Header";

function App() {
  const counter = 1;

  function handleButtonClick() {}

  return (
    <div>
      <Header title="Hello World" />
      <h1>conteúdo da aplicação</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>
        Aumentar
      </button>
    </div>
  );
}
export default App;
