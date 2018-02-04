const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;  
  
  const responseMsg = {
    "YES": "https://cdn.discordapp.com/attachments/301400303893479434/409506457525157899/YES.png",
    "HELL YES": "https://cdn.discordapp.com/attachments/301400303893479434/409506479083880462/HELL_YES.png",
    "NO": "https://cdn.discordapp.com/attachments/301400303893479434/409506498700509194/NO.png",
    "RULES": "**Welcome to Deciduous!**\nI hope you enjoy your stay. Before we get started, I'd like to lay out a few ground rules.\n:one: **Be wholesome.** Treat others with kindness and respect. Follow Discord's Community Guidelines found here: #welcome\n:two: **Keep conversations appropriate and inclusive.** General conversations in #tavern  are conversations among multiple users. This means no topics meant to incite a negative response/argument. Move 1 on 1 discussions to DMs.\n:three: **Don't use selfbots.** No selfbot commands of any kind should be used on this server. This includes any program running on your account that is able to perform actions through the API.\n:four: **No NSFW.** Please don't link to, post images of, or allude to anything NSFW. If you have an inappropriate name or avatar, you will be asked to change it.\n:five: **No advertising.** Don't link to other servers here. Official Discord servers are fine. Asking for views on your video/stream/giveaway/website is also forbidden.\n:six: **Don't spam.** Don't spam ping other users. Do not under any circumstance ping someone and then delete it.\n:seven: **Admin have final verdict on rules.**  If a Admin asks you to stop doing something, you should stop.\nOnly mention **Admin** if a user is breaking the rules. **Include a reason / summary of what happened in your message.**"
  };
  
  if(responseMsg[message.content]) {
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
