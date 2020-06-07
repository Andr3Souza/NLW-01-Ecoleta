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
  useNullAsDefault: true,
});

export default connection;

//Migration = Histórico do banco de dados
