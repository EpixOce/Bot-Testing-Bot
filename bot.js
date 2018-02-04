const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;  
  
  if (message.content.startsWith("Puck")) {
    message.channel.send("https://cdn.discordapp.com/avatars/266843583636570112/61c25e8b86fb31970376e01f04f59ba7.png?size=512");
  } else

  if (message.content.startsWith("player")) {
    message.channel.send("https://cdn.discordapp.com/avatars/226358745897238529/dfdaa189ffeaf473e9cd4404e00cc43e.png?size=512");
  }
  
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    
  }
});

client.login(process.env.BOT_TOKEN);
