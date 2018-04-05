const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.reply("**Party Adventure!**, make sure it is your turn! :cherries:");
    }, 19750)
}

module.exports.help = {
    name: "padv"
}
