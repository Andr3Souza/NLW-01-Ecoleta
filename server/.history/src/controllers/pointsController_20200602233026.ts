import knex from "../database/connection";
import { Request, Response } from "express";

class PointsController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "point not found." });
    }

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id);

    return response.json(point);
  }
  async create(request: Request, response: Response) {
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

    const trx = await knex.transaction();

    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
    };

    // modelo de short syntax = quanto a variavel e o valor são iguais vc somente precisa adicionar um deles dessa forma
    // substitui name: name
    const insertedIds = await trx("points").insert({
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id: point_id,
      };
    });

    await trx("point_items").insert(pointItems);

    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;
