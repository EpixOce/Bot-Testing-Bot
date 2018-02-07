exports.run = (client, message, args) => {
    message.channel.send(`${message.author.username}` + ", **Sides Timer Set!**")
    setTimeout(function() {
        message.reply(" **Sides!** :carrot:");
    }, 300000)
};

