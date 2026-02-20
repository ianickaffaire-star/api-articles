const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const articleRoutes = require("./routes/article.routes");

app.use(articleRoutes);

app.get("/", (req, res) => {
  res.json({
    code: "200",
    message: "API démarrée correctement",
    data: null
  });
});

module.exports = app;
