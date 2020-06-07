import React, { useState } from "react";
import "./App.css";

import Header from "./Header";

function App() {
  //função de estádo do react
  const [counter, setCounter] = useState(0); //Sempre retorna um arraay [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick() {
    setCounter(counter + 1);
  }

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
