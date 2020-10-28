const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "Displays bot information",
  
    run(msg) {
        const { channel } = msg
        const botAuthor = "Tymon Boliński (usagi.02808)"
        const botVersion = "v0.1"
        const botName = "USAGI8"
        const botDescription =
          "A general purpose bot."
    
          const embed = new Discord.MessageEmbed()
          // Set the title of the field
          .setTitle(botName)
          // Set the color of the embed
          .setColor(0xffc508)
          // Set the main content of the embed
          .setDescription(botDescription)
          .addField("Author", botAuthor)
          .addField("Version", botVersion)
    
        channel.send(embed)
    },
  }  