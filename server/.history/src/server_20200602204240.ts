import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  // Rota : Endereço completo da requisão
  // Recurso: Qual entidade estamos acessando do sistema

  //Navegador somente sabe fazer requisições Get

  //response .send pode ser utilizado para retornar um texto do servidor pela rota
  //response.send("Hello world");

  // response.json para retornar um json do servidor pela rota
  response.json(["Diego", "Cleiton", "Robson", "Daniel", "André"]);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Diego",
    email: "diego@rocketseat.com.br",
  };
  //Colocar o return sempre que será devolvidamuma resposta ao servidor.
  return response.json(user);
});

app.listen(3333);
