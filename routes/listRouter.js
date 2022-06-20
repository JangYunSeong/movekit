const express = require('express');

const listRouter = express.Router();
listRouter.use(express.json());

listRouter.get("/", (req,res) => {
    res.render('worklist.html');
})

module.exports = listRouter;
