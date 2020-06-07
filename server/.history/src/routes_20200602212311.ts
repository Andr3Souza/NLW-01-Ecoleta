import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});
// exportar as rotas para acessa-lás de outros arquivos
export default routes;
