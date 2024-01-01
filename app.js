const fs = require("fs");
const util = require("util");
const App = require("./classes/App.js");
const app = new App();
const folderLogs = "./logs";
const { setup } = require("./database/createTable.js");
const uuid = require("uuid");

if (!fs.existsSync(folderLogs)) {
    fs.mkdirSync(folderLogs, { recursive: true });
}
const start = async () => {
    await setup(app);
    const id =  uuid.v4();
    const test = await app.db.collection("Players").findOne({ _id: id });
    if (!test) await app.db.collection("Players").insertOne({_id: id, stats: 1});
    app.data.set("lol", 0);
    console.log(app.data.get("lol"));
}
start().catch(e => console.error(e));

const log = fs.createWriteStream(`./logs/${Date.now()}.txt`, { flags: 'a' });
console.log = (message) => {
    log.write(util.format(message) + '\n');
    process.stdout.write(util.format(message) + '\n');
};
console.error = console.log;