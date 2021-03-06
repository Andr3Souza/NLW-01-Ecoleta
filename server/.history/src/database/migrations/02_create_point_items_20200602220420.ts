import Knex from "knex";

export async function up(knex: Knex) {
  //Criar a tabela
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable();
    table.integer("item_id").notNullable();
  });
}

export async function down(knex: Knex) {
  // voltar atras (Deletar a tabela)
  return knex.schema.dropTable("items");
}
