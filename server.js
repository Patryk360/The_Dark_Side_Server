const { QuickDB } = require("quick.db");
const mainDB = new QuickDB({ filePath: "database/main.sqlite" });
const playersDB = new QuickDB({ filePath: "database/players.sqlite" });

require("./functions/main.js").run(mainDB);
require("./functions/ws.js")(mainDB);
require("./functions/webPage.js")(mainDB);
require("./functions/main.js").console();