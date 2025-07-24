const readline = require("node:readline");
const { startWS } = require("./mainManager.js");

module.exports = {
    startServer: (gameServer) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "> "
        });
        startWS(gameServer, rl);
        rl.on("line", (line) => {
            const input = line.trim().split(" ");
            const command = input[0];
            const args = input.slice(1).join(" ")

            switch(command) {
                case "help":
                    require("./commands.js").help();
                    break;
                case "info":
                    require("./commands.js").info();
                    break;
                case "stop":
                    require("./commands.js").stop(gameServer);
                    break;
                case "say":
                    require("./commands.js").say(args);
                    break;
                default:
                    console.log("[SERVER]: What do you mean?");
            }
            rl.prompt();
        });
    }
}