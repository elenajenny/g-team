const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.get("/script.js", function(req, res) {
    res.sendFile(__dirname + "/" + "script.js");
  });

app.get("/style.css", function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

var picture = "/Blitz.svg";
app.get("/", function (req, res) {
res.sendFile(picture);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});