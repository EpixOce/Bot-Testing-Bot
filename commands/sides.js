exports.run = (client, message, args) => {
    message.channel.send('Sides timer set!')
    setTimeout(function() {
        message.reply(" **Sides!** :carrot:");
    }, 300000)
};

