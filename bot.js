const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

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
    
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 0) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send(userlist + ", welcome to **Deciduous!** Enjoy your stay here.);
    newUsers[guild.id].clear();
  }
});

client.login(process.env.BOT_TOKEN);
