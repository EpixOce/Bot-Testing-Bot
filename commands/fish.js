const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(function() {
        message.delete();
    }, 10000);
    setTimeout(async function() {
        const r = await message.reply("**Time to Fish!**");
        setTimeout(function() {
            r.delete();
        }, 20000);
    }, 300000)
}
module.exports.help = {
    name: "fish"
}
