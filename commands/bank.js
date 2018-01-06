
exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Lostina Bank"
        },
        title: "",
        url: "",
        description: "",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
};
