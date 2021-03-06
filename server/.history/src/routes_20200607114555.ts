import express from "express";

import multer from "multer";

import multerConfig from "../src/config/multer";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const uploads = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);

routes.get("/points/:id", pointsController.show);

routes.get("/points", pointsController.index);

//Padrão da comunidade: index, show, create, update, delete

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
