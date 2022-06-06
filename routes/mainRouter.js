const express = require('express');

const mainRouter = express.Router();
mainRouter.use(express.json());

mainRouter.get("/", (req, res) => {
    res.render("/views/main.html");
  });

module.exports = mainRouter;