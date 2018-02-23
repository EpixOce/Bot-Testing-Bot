const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;  
  
  const reply = {
    "#!adv": ":x: The prefix in this server is `,`",
    "#!stats": ":x: The prefix in this server is `,`",
    "#!rules": ":arrow_down: There are some simple rules that you will need to follow here in this server!\n-----\n \n:one: **Spamming or clogging the chat (applies to pings as well), will result in a mute by a staff.**\n \n:two: **Use the channels according to their purpose.**\n \n:three: **Inappropriate or rude nicknames, messages, links and posts will not be tolerated.**\n \n:four: **No NSFW content anywhere in this server.**\n \n:five: **Treat others with respect, and enjoy your time here in Error!**\n \n-----\n:warning: **The staff reserve the rights to punish you for breaking the rules, punishment would be decided by the staff's judgement.**\n \nFollow these rules and have fun grinding!",
    "#!changelog": ":arrow_down: __**Changelog of Unnamed RPG Timer:**__ :arrow_down:\n \nAdded commands:\n - #!search\n - #!catch\n - #!pet\n - #!rules (for Anonymous server)\n - #!server (an invite to the server **DiscordRPG - Anonymous**.",
    "#!server": ":arrow_down: Permanent Invite link to the server **DiscordRPG - Anonymous**!! :arrow_down:\nhttps://discord.gg/hH7ZuNv",
    "#!chop": ":deciduous_tree: " + `${message.author.username}` + " went to chop some wood but fell into a pithall.",
    "#!mine": ":pick: " + `${message.author.username}` + " found a Cinnarbar, got poisoned and died.",
    "#!forage": ":tulip: " + `${message.author.username}` + " went foraging and got stung by bees.",
    "#!fish": ":fishing_pole_and_fish: " + `${message.author.username}` + " caught a shark and got their head bitten off.",
    "#!search": "He vanished. You search for the whereabouts of Epix, but you couldn't see anyone in sight, well, **you never saw him coming** in the first place anyways...",
    "#!catch": `${message.author.username}` + " tried to catch the insanely wealthy AnimeFan, but were bombarded by money bags falling out of nowhere. :moneybag:\nYou're rich now, in your afterlife anyways.",
    "#!pet": `${message.author.username}` + " has signed a contract to become AnimeFan's pet."
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

