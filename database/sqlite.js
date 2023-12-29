const { sqlite } = require("../configs/databaseConfig.js");
const { QuickDB } = require('quick.db');
module.exports = {
    run: async () => {
        const main = new QuickDB({ filePath: `./database/sqlite/${sqlite.main}.sqlite` });
        const playerData = new QuickDB({ filePath: `./database/sqlite/${sqlite.playerData}.sqlite` });
        console.log("SQLite database is enabled!");
    }
}