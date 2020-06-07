import express from "express";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);

//Padrão da comunidade: index, show, create, update, delete

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
