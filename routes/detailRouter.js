const express = require('express');

const detailRouter = express.Router();
detailRouter.use(express.json());

detailRouter.get("/", (req,res) => {
    res.render('workDetail.html');
})

detailRouter.get("/result",(req,res)=>{
    res.render('workResult.html');
})
module.exports = detailRouter;
