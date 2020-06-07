import express from "express";

const app = express();
// Maneira de permitir que o express interprete um JSON
app.use(express.json());
const users = ["Diego", "Cleiton", "Robson", "Daniel", "André"];

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333);
