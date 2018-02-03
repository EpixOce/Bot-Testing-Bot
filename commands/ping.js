exports.run = (client, message, args) => {
  message.channel.send(`**Pong!** Client's Ping is \`${client.pings[0]}ms\``);
};

