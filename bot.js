const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is up and running!`)
    bot.user.setGame("DiscordRPG!")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  if(cmd === `${prefix}adv`) {
    setTimeout(function() {
      message.reply("**Adventure!** :arrow_down:");
    }, 13900)
  };
  if(cmd === `${prefix}padv`) {
    setTimeout(function() {
        message.reply("**Party Adventure!**, make sure it is your turn! :cherries:");
    }, 19750)
  };
  if(cmd === `${prefix}sides`) {
    message.channel.send(`${message.author.username}` + ", **Sides Timer Set!**")
    setTimeout(function() {
        message.reply(" **Sides!** :carrot:");
    }, 300000)
  }
});

bot.login(process.env.BOTTOKEN);
