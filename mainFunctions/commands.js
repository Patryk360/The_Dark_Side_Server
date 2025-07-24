"use strict";
const chalk = require("chalk");
const { send } = require("./mainManager");
const { save } = require("../dbFunctions/dbSaveServer.js");
module.exports = {
    help: () => {
        let help = "help - if you search to help\n";
        help += "info - if you search a info about server\n";
        help += "say - say something to server\n";
        help += "stop - if you want close a server";
        console.log(help);
    },
    info: () => {
        console.log("[SERVER] IN PROGRESS");
    },
    say: (msg) => {
        if (!msg) return console.log(chalk.red("[SERVER] error"));
        send(msg);
        console.log("[SERVER] " + msg);
    },
    stop: (gameServer) => {
        save(gameServer);
        console.log("[SERVER] SAVED");
        process.exit();
    }
}