const express = require("express");
const todoRoutes = require("./src/todo/routes");
require("dotenv").config();
const app = express();
const cors = require("cors");

const port = 3000;

app.use(cors());

//allow us to post and get json from endpoint
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/todos", todoRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));
