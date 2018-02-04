const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;  
  
  const responseMsg = {
    "yes": "https://cdn.discordapp.com/attachments/301400303893479434/409506457525157899/YES.png",
    "hell yes": "https://cdn.discordapp.com/attachments/301400303893479434/409506479083880462/HELL_YES.png",
    "no": "https://cdn.discordapp.com/attachments/301400303893479434/409506498700509194/NO.png"
  };
  
  if(responseMsg[message.content]) {
    message.delete();
    message.channel.send(responseMsg[message.content]);
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
