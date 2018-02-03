exports.run = (client, message, args) => {
  message.channel.send(`Pong! \`${client.pings[0]}ms\``);
};

