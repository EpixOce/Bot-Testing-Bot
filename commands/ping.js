exports.run = (client, message, args) => {
  message.reply(`**Pong!** Client's Ping is \`${client.pings[0]}ms\``);
};

