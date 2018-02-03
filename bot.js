const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    
    if (message.content.startsWith("welcome")) {
    message.channel.send("Hello there! Welcome to **Deciduous!**");
  }
  }
});


client.login(process.env.BOT_TOKEN);
