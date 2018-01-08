exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Fidget Spinner Event! Prizes to be won!"
        },
        description: "**First Place:** YukiNeko - 82305\n**Second Place:** Sora_Gaming99 - 80411\n**Third Place:** Planeswalker15 - 50176",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
