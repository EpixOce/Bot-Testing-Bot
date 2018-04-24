const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send(`${message.author.username}` + ", **Sides Timer Set!**");
    setTimeout(function() {
        m.delete();
        message.delete();
    }, 10000);
    setTimeout(async function() {
        const r = await message.reply("**Sides Time! :carrot:**");
        setTimeout(function() {
            r.delete();
        }, 20000);
    }, 300000)
}

module.exports.help = {
    name: "sides"
}
