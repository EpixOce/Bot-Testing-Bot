exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Fidget Spinner Event! Prizes to be won!"
        },
        description: "**Event Ended**",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
