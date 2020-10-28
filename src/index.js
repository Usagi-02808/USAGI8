const Discord = require('discord.js');
const chalk = require('chalk');

const config = require('./config.json');

const client = new Discord.Client();

const log = console.log;
const prefix = config.prefix;

client.on('ready', () => {
  log(chalk.yellow(`Logged in as ${client.user.tag}!`));
});

client.on("message", (msg) => {
  const { author, guild, channel } = msg

  // Check if user is a bot
  if (author.bot || !guild) {
    return
  }

  // Ignore messages without prefix
  if (!msg.content.startsWith(prefix)) return

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)

  const cmd = args.shift().toLowerCase()

  if (cmd === "ping") {
    msg.reply("Pong!")
  }

  if (cmd === "info") {
    const botAuthor = "Tymon Boliński (usagi.02808)"
    const botVersion = "v0.1"
    const botName = "USAGI8"
    const botDescription =
      "A general purpose bot."

      const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Author", botAuthor, true)
      .addField("Version", botVersion, true)

    channel.send(embed)
  }
})

client.login(config.token);