const express = require('express');
const Order = require('../model/order');

const orderRouter = express.Router();
orderRouter.use(express.json());

orderRouter.route('/')
.post((req,res,next)=>{
    const name = req.body.name;
    const tel = req.body.tel;
    const curpos = req.body.curpos;
    const movpos = req.body.movpos;
    const day = req.body.day;
    const goods = req.body.goods;
    const people = req.body.people;
    const list = []
    const newOrder = new Order({
        name,
        tel,
        curpos,
        movpos,
        day,
        goods,
        people,
        list,
    });
    newOrder
        .save()
        .then((order)=>{
            console.log('order created : ',order);
            res.statusCode = 200;
            res.setHeader('content-Type','application/json');
            res.json(order);
        },(err)=>next(err))
        .catch((err)=>next(err))
})
.delete((req,res,next)=>{
    Order.remove({})
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err));
});

orderRouter.route('/worklist')
.get((req,res,next)=>{
    Order.find({})
    .then((orders)=>{
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.json(orders);
    },(err)=>next(err))
    .catch((err)=>next(err));
});
orderRouter.route('/worklist/:orderId')
.get((req,res,next)=>{
    Order.findById(req.params.orderId)
    .then((order)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(order);
    },(err)=>next(err))
})
.put((req,res,next)=>{
    Order.findByIdAndUpdate(req.params.orderId,{
        $set : req.body
    },{new:true})
    .then((order)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(order);
    },(err)=>next(err));
});


module.exports = orderRouter;
