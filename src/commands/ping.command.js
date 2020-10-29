module.exports = {
    name: "ping",
    description: "Ping!",
    guildOnly: true,
    cooldown: 30,
  
    run(msg, args) {
      msg.reply("Pong!")
    },
  }  