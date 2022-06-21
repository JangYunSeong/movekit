const express = require("express");
const app = express();
const nunjucks = require('nunjucks');
const connect = require('./model/index');
const mainRouter = require("./routes/mainRouter");
const orderRouter = require('./routes/orderRouter');
const listRouter = require('./routes/listRouter');
const detailRouter = require("./routes/detailRouter");
const completeRouter = require("./routes/completeRouter");
const cors = require('cors');
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
nunjucks.configure('views', {
  autoescape:true,
  express:app,
  watch:true
});
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use('/',mainRouter);
app.use('/worklists', listRouter);
app.use('/complete',completeRouter);
app.use('/detail', detailRouter);
app.use('/',orderRouter);

connect();

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server is running on port ${port}`);
  console.log("http://localhost:"+port);
});