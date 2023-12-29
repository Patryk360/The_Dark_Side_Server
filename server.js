const fs = require("fs");
const util = require("util");
const folderDB = "./database/sqlite";
const folderLogs = "./logs";
const { sqlite, mongodb} = require("./configs/databaseConfig.js");

if (!fs.existsSync(folderDB) && sqlite.enable) {
    fs.mkdirSync(folderDB, { recursive: true });
}
if (!fs.existsSync(folderLogs)) {
    fs.mkdirSync(folderLogs, { recursive: true });
}

const server = async () => {
    require("./backend/console.js").console();
    require("./backend/mainManager.js");
    if (sqlite.enable && !mongodb.enable) {
        await require("./database/sqlite.js").run();
    }
    if (mongodb.enable && !sqlite.enable) {
        await require("./database/mongodb.js").run();
    }
}

const { UUID } = require("bson");

server().then(r => console.log("Server started! " + new UUID().toString()));

const log = fs.createWriteStream(`./logs/${Date.now()}.txt`, { flags: 'a' });
console.log = (message) => {
    log.write(util.format(message) + '\n');
    process.stdout.write(util.format(message) + '\n');
};
console.error = console.log;