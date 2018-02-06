exports.run = (client, message, args) => {
    setTimeout(function() {
        message.channel.send(`${message.author.username}` + ", **Adventure!** :notes:");
    }, 13950)
};

