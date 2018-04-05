const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.reply("**Adventure!** :arrow_down:");
    }, 14000)
}

module.exports.help = {
    name: "adv"
}
