const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const schema = mongoose.Schema;

const workSchema = new schema({
    name : {
        type:String,
        trim:true,
        require:true,
    },
    tel : {
        type:String,
        trim:true,
        require:true,
    },
},{timestamps:true});

const orderSchema = new schema({
    name : {
        type:String,
        require:true,
        trim:true,
        minlength:3,
    },
    tel :{
        type:String,
        require:true,
        trim:true,
        minlength:11,
        maxlenght:11,
    },
    curpos:{
        type:String,
        require:true,
    },
    movpos:{
        type:String,
        require:true,
    },
    day:{
        type:Date,
        require:true,
    },
    goods:{
        type:String,
        require:true,
    },
    people:{
        type:Number,
        min:0,
    },
    list:[workSchema],
},
{ timestamps:true }
);

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;