import React from "react";
import "./App.css";

import Header from "./Header";

function App() {
  const counter = 1;

  return (
    <div>
      <Header title="Hello World" />
      <h1>conteúdo da aplicação</h1>
      <h1>{counter}</h1>
    </div>
  );
}
export default App;
