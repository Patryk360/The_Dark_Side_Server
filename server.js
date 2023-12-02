const { QuickDB } = require("quick.db");
const fs = require("fs");
const util = require("util");
const mainDB = new QuickDB({ filePath: "database/main.sqlite" });
const playersDB = new QuickDB({ filePath: "database/players.sqlite" });

require("./functions/main.js").run(mainDB);
require("./functions/ws.js")(mainDB);
require("./functions/webPage.js")(mainDB);
require("./functions/main.js").console();

const log = fs.createWriteStream(`./logs/${Date.now()}.txt`, { flags: 'a' });
console.log = (message) => {
    log.write(util.format(message) + '\n');
    process.stdout.write(util.format(message) + '\n');
};
console.error = console.log;