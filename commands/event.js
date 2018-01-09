exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Fidget Spinner Event! Prizes to be won!"
        },
        description: "**First Place:** Planeswalker15 - 99460\n** Second Place:**YukiNeko - 82305\n**Third Place:** Sora_Gaming99 - 80411",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
