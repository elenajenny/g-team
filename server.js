"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3000;
// Chats Array
let chats = [];
let filteredchats = [];
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/chat", (req, res) => {
    const chat = req.body;
    console.log(chat);
    // Chat zum array hinzufügen
    chats.push(chat);
    // Chat zur Datei hinzufügen
    fs.writeFile("chats.json", JSON.stringify(chats), function (err) {
        if (err)
            throw err;
        console.log("complete");
    });
    res.send("Chat is added to the server");
});
// Lesen aller chats
app.get("/chats", (req, res) => {
    res.json(chats);
});
// Einlesen der gespeicherten Chats
app.get("/load", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    fs.readFile("chats.json", (err, data) => {
        if (err)
            throw err;
        chats = JSON.parse(data);
        console.log("Chats alle gelesen");
        //console.log(chats);
    });
});
// Lesen aller Chats mit Filter "Channel"
app.get("/filter", (request, response) => {
    let channel = request.query.channel;
    console.log("channel: " + channel);
    if (chats.filter(chat => chat.channel == channel).length !== 0) {
        filteredchats = chats.filter(chat => chat.channel == channel);
        response.json(filteredchats);
    }
    else {
        response.status(404).send();
    }
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
//# sourceMappingURL=server.js.map