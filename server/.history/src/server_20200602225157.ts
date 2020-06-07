import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
// Maneira de permitir que o express interprete um JSON
app.use(express.json());
app.use(routes);

//servir arquivos staticos de uma aplicação específica
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3334);
