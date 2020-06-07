import express from "express";

const app = express();
// Maneira de permitir que o express interprete um JSON
app.use(express.json());
const users = ["Diego", "Cleiton", "Robson", "Daniel", "André"];

app.get("/", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  response.json(filteredUsers);
});

app.listen(3333);
