const express = require('express');

const completeRouter = express.Router();
completeRouter.use(express.json());

completeRouter.get("/", (req,res) => {
    res.render('completeList.html');
})
completeRouter.get('/detail',(req,res)=>{
    res.render('completeDetail.html')
})

module.exports = completeRouter;
