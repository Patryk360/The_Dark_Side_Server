const readline = require("node:readline");
module.exports = {
    readConsole: () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.on("line", (line) => {
            switch(line) {
                case "help":
                    require("./commands.js").help();
                    break;
                case "info":
                    require("./commands.js").info();
                    break;
                case "stop":
                    require("./commands.js").stop();
                    break;
                case "say":
                    require("./commands.js").say("Hello!");
                    break;
                default:
                    console.log("[SERVER]: What do you mean?");
            }
        });
    }
}