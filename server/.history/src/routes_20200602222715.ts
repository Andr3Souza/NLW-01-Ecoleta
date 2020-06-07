import express from "express";
import knex from "./database/connection";
const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  return response.json(items);
});

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
