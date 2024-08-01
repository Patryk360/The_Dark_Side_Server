"use strict";
module.exports = {
    help: () => {
        let help = "help - if you search to help\n";
        help += "info - if you search a info about server\n";
        help += "stop - if you want close a server";
        console.log(help);
    },
    info: () => {
        console.log("[SERVER] IN PROGRESS");
    },
    say: (msg) => {
        console.log("[SERVER] " + msg);
    },
    stop: () => {
        console.log("[SERVER] SAVED");
        process.exit();
    }
}