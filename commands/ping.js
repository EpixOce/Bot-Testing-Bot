
exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Pong!"
        },
        description: "Your ping is " + Math.ceil(client.ping, 1) + " ms." + " Please wait a few seconds before using this command again.",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}

        



    
         
    
    