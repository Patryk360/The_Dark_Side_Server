const express = require("express");
module.exports = (db) => {
    const app = express();

    app.get("/", (req, res) => {
       res.send("HI");
    });

    app.listen(8070, () => {
        console.log("8070");
    })
}