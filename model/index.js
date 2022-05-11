const express = require("express"); // express 미들웨어
const cors = require("cors"); // cors 미들웨어
const mongoose = require("mongoose"); // mongoose
require("dotenv").config(); // 환경변수를 위한 dotenv
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // mongoDB Connect 정보
const connect = ()=>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const connection = mongoose.connection;
      connection.once("open", () => {
        console.log("MongoDB database connection success");
      });
}

module.exports = connect;