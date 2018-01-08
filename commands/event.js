exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Fidget Spinner Event! Prizes to be won!"
        },
        description: "**First Place:** YukiNeko - 82305\n**Second Place:** n/a\n**Third Place:** n/a",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
