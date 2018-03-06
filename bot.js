const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;
  if (message.author.id !== '196203663054733313') return;
  
  const reply = {
    "#!adv": ":x: The prefix in this server is `,`",
    "#!stats": ":x: The prefix in this server is `,`",
    "#!server": ":arrow_down: Permanent Invite link to the server! :arrow_down:\nhttps://discord.gg/hH7ZuNv",
    "#!chop": ":deciduous_tree: " + `${message.author.username}` + " went to chop some wood but fell into a pithall.",
    "#!mine": ":pick: " + `${message.author.username}` + " found a Cinnarbar, got poisoned and died.",
    "#!forage": ":tulip: " + `${message.author.username}` + " went foraging and got stung by bees.",
    "#!fish": ":fishing_pole_and_fish: " + `${message.author.username}` + " caught a shark and got their head bitten off."
  };
  
  if(reply[message.content]) {
    message.channel.send(reply[message.content]);
  };
  
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

