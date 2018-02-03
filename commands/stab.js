exports.run = (client, message, args) => {
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 message.channel.send(`${message.author.username}` + " stabs " `args`);
}
