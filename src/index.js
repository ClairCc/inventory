const express = require("express");
const app = express();
const puerto = 3000;
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");
//Settings
const port = process.env.PORT || puerto;
//Middlewares
app.use(morgan("dev"));
// Va a comprobar si nuestro formato es un formato json, si lo es nos permitira acceder a el dentro del codigo
app.use(express.json());
//Routes

app.use("/inventory", require("./routes/inventoryroutes"));
//Static Files
app.use(express.static(path.join(__dirname, "public")));
//Start the server
app.listen(port, () => {
  console.log(`servidor inicializado en ${port}`);
});
