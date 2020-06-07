import express from "express";
import knex from "./database/connection";
const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

routes.post("/points", async (request, response) => {
  //modelo de desestruturação do js quando o objeto vem antes do
  //igual pode ser feito dessa forma pois fica como se tivesse declarando todas as const separadamente
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    cidade,
    uf,
    items,
  } = request.body;

  // modelo de short syntax = quanto a variavel e o valor são iguais vc somente precisa adicionar um deles dessa forma
  // substitui name: name
  await knex("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    cidade,
    uf,
    items,
  });
  return response.json({ success: true });
});

// exportar as rotas para acessa-lás de outros arquivos
export default routes;
