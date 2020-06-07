import express from "express";

// Rota : Endereço completo da requisão
// Recurso: Qual entidade estamos acessando do sistema

//Navegador somente sabe fazer requisições Get

//response .send pode ser utilizado para retornar um texto do servidor pela rota
//response.send("Hello world");

// response.json para retornar um json do servidor pela rota

// Request param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param:

const app = express();
const users = ["Diego", "Cleiton", "Robson", "Daniel", "André"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  response.json(users);
});

app.get("/users/:id", (request, response) => {
  //: significa que vc está recebendo um parametro
  //O valor do parametro sempre virá  como um astring
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
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
