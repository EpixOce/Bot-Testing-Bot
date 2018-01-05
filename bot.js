const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "test")) {
    message.channel.send("testing!");
  }
});

client.login(process.env.BOT_TOKEN);
