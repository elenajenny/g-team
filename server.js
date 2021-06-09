"use strict";
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/script.js", function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});
app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});
// var picture = "/Blitz.svg";
// app.get("/", function (req, res) {
// res.sendFile(picture);
// });
io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});
server.listen(3000, () => {
    console.log("listening on *:3000");
});
//# sourceMappingURL=server.js.map