import express from "express";
import knex from "./database/connection";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const pointsController = new PointsController();

routes.get("/items", ItemsController.index);

routes.post("/points", pointsController.create);

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
