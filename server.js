const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./app/router");

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use(router);

app.listen(PORT, (req, res) => {
  console.log(`serveur OK http://localhost:${PORT}`);
});
