exports.run = (client, message, args) => {
    message.reply('Sides timer set!')
    setTimeout(function() {
        message.reply(" **Sides!** :carrot:");
    }, 300000)
};
