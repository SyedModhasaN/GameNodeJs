const fs = require('fs')
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/html/game.html")
    
    });
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
    });