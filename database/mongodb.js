const { MongoClient, ServerApiVersion } = require('mongodb');
const { mongodb } = require("../configs/databaseConfig.js");
module.exports = {
    run: async () => {
        const client = new MongoClient(mongodb.url, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        const collections = await client.db("MainDB").listCollections().toArray();
        if (!collections.find(x => x.name === "Main")) {
            await client.db("MainDB").createCollection("Main");
        }
        if (!collections.find(x => x.name === "Players")) {
            await client.db("MainDB").createCollection("Players");
        }
        console.log("Connected successfully to server!");
    }
}