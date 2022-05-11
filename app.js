const express = require("express");
const app = express();
// const mongoose = require("mongoose"); // mongoose
// require("dotenv").config();
// const cors = require("cors");
const connect = require('./model/index');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(__dirname));

const orderRouter = require('./routes/orderRouter');
app.use('/',orderRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/main.html");
});

app.get("/worklist", (req,res) => {
    res.sendFile(__dirname + "/views/worklist.html");
})

connect();

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server is running on port ${port}`);
  console.log("http://localhost:"+port);
});