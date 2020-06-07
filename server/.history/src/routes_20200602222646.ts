import express from "express";
import knex from "./database/connection";
const routes = express.Router();

routes.get("/items", (request, response) => {
  const items = knex("items").select("*");
  return response.json({ message: "Hello World" });
});

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
