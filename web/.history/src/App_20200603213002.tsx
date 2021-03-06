import React, { useState } from "react";
import "./App.css";

import Header from "./Header";

function App() {
  //função de estádo do react
  const [counter, setCounter] = useState(0); //Sempre retorna um arraay [valor do estado, função para atualizar o valor do estado]

  //Seguind o o conceito de imutabilidade do JS esta função utiliza um setCounter para setar um novo valor para o counter, e nnão alterar o existente de forma direta
  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`} />
      <h1>conteúdo da aplicação</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>
        Aumentar
      </button>
    </div>
  );
}
export default App;
