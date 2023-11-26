const readline = require("readline");
module.exports = {
    run: (db) =>{
        const mainInfo = db.get("server");
        if (!mainInfo) {
            db.set("server", { info: "ok" });
        }
    },
    console: () => {
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
                default:
                    console.log("[SERVER]: What do you mean?");
            }
        });
    }
}