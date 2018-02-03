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
    
  }
});

client.on("message", async message => {
  if(message.author.bot) return;
  
  const args = message.content;
  const command = args.shift().toLowerCase();
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});


client.login(process.env.BOT_TOKEN);
