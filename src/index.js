const Discord = require('discord.js');
const chalk = require('chalk');

const config = require('./config.json');

const client = new Discord.Client();

const commandHandler = require("./handlers/command.handler")

const log = console.log;
const prefix = config.prefix;

// Initialize Comamnd Manager
commandHandler(client)

//login info
client.on('ready', () => {
  log(chalk.yellow(`Logged in as ${client.user.tag}!`));
});

//login token
client.login(config.token);

//Error manager
client.on("debug", (msg) => {
  console.log(chalk.redBright("debug: "+Discord.info))
});
client.on("warn", (msg) => {
  console.log(chalk.redBright("warn: "+Discord.info))
});
client.on("error", (msg) => {
  console.log(chalk.redBright("error: "+Discord.info))
});