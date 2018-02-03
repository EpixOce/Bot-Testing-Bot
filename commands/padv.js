
exports.run = (client, message, args) => {
    setTimeout(function() {
        message.channel.send(`${message.author.username}` + ", **Party Adventure!**, make sure it is your turn! :cherries:");
    }, 19750)
};

