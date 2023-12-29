const chalk = require("chalk");
module.exports = {
    help: () => {
        let help = "help - if you search to help\n";
        help += "info - if you search a info about server\n";
        help += "stop - if you want close a server";
        console.log(help);
    },
    info: () => {
        console.log(chalk.blue("[SERVER] IN PROGRESS"));
    },
    say: (msg) => {
        console.log(chalk.blue("[SERVER] " + msg));
    },
    stop: () => {
        console.log(chalk.blue("[SERVER] SAVED"));
        process.exit();
    }
}