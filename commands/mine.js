const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.delete();
    }, 10000)
}

module.exports.help = {
    name: "mine"
}
