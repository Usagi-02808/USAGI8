module.exports = {
  name: "clear",
  description: "Deletes specific amount of messages in a channel.",
  args: true,
  usage: "<amount>",
  guildOnly: true,
  aliases: ["clean"],

  run(msg, args) {
    const { channel } = msg
    const amountArg = parseInt(args[0])

    if (!Number.isInteger(amountArg)) {
      return channel.send("You must specify the amount of messages to clear!")
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "You can clear from 2 messages to 100",
      )
    }

    channel.bulkDelete(amountArg)
  },
}