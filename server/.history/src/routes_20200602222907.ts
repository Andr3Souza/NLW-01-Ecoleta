import express from "express";
import knex from "./database/connection";
const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return 1;
  });
  return response.json(items);
});

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
