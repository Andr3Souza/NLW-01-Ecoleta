import express from "express";
import knex from "./database/connection";

import PointsController from "./controllers/pointsController";

const routes = express.Router();
const pointsController = new PointsController();

routes.get("/items");

routes.post("/points", pointsController.create);

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
