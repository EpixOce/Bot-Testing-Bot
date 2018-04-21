const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send(`${message.author.username}` + ", **Sides Timer Set!**");
        setTimeout(function() {
            message.reply(" **Sides!** :carrot:");
        }, 300000);
    m.delete()
}

module.exports.help = {
    name: "sides"
}
