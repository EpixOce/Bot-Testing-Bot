exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Fidget Spinner Event! Prizes to be won!"
        },
        description: "**First Place:** Planeswalker15 - 99460\n**Second Place:** JulianSynthetic - 98929\n**Third Place:** ITotallyDontLikeFutaLolis - 97798",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
