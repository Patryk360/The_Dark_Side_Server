const fs = require("fs");
const util = require("util");
const GameServer = require("./classes/GameServer.js");
const startServer = require("./mainFunctions/mainManager.js");
const gameServer = new GameServer();
const { setup } = require("./database/createTable.js");
const { readConsole } = require("./mainFunctions/readConsole.js");

if (!fs.existsSync("./logs")) {
    fs.mkdirSync("./logs", { recursive: true });
}
const start = async () => {
    await setup(gameServer);
    startServer(gameServer);
    readConsole(gameServer);
}
start().catch(e => console.error(e));

const log = fs.createWriteStream(`./logs/${Date.now()}.txt`, { flags: 'a' });
console.log = (message) => {
    log.write(util.format(message) + '\n');
    process.stdout.write(util.format(message) + '\n');
};
console.error = console.log;