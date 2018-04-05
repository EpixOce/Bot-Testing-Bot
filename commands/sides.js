const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(`${message.author.username}` + ", **Sides Timer Set!**")
        setTimeout(function() {
            message.reply(" **Sides!** :carrot:");
        }, 300000)
}

module.exports.help = {
    name: "sides"
}
