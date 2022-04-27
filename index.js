const express = require("express");
const server = express();

server.use(express.static(__dirname));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/main.html");
});

server.get("/worklist", (req,res) => {
    res.sendFile(__dirname + "/views/worklist.html");
})


server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
  console.log("http://localhost:3000");
});