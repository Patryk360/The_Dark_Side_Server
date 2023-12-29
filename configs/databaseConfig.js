require('dotenv').config();
module.exports = {
    sqlite: {
        enable: false,
        main: "main",
        playerData: "playerData"
    },
    mongodb: {
        enable: true,
        url: `mongodb+srv://NeXiPL:${process.env.PASSWORD}@thedarkdb.qeywzve.mongodb.net/?retryWrites=true&w=majority`,
        main: "main",
        playerData: "playerData"
    }
}