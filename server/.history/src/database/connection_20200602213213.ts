import knex from "knex";
//Bibliotecas para trabalhar com caminhos
//path.resolve serve para unir caminhos
// dirname sempre retorna o caminho para o diretório que está executando ele
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
});

export default connection;