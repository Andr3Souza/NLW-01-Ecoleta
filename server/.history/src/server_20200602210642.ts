import express from "express";

//express não vem por padrão sabendo json

// Rota : Endereço completo da requisão
// Recurso: Qual entidade estamos acessando do sistema

//Navegador somente sabe fazer requisições Get

//response .send pode ser utilizado para retornar um texto do servidor pela rota
//response.send("Hello world");

// response.json para retornar um json do servidor pela rota

// Request param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

const app = express();
// Maneira de permitir que o express interprete um JSON
app.use(express.json());
const users = ["Diego", "Cleiton", "Robson", "Daniel", "André"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  //: significa que vc está recebendo um parametro
  //O valor do parametro sempre virá  como um astring
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;
  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };
  return response.json(user);
});

app.listen(3333);
