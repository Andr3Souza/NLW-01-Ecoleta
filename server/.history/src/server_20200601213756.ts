import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  //response .send pode ser utilizado para retornar um texto do servidor pela rota
  //response.send("Hello world");

  response.json(["Diego", "Cleiton", "Robson"]);
});

app.listen(3333);
