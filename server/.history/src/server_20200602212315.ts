import express from "express";
import routes from "./routes";

const app = express();
// Maneira de permitir que o express interprete um JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
