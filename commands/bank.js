
exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Disboard Bank"
        },
        title: "https://docs.google.com/spreadsheets/d/1RAlFPPEToevcKxUQ_Iu9AfoGIsz8FRQrSfJzfCj0ob0/edit?usp=sharing",
        url: "https://docs.google.com/spreadsheets/d/1RAlFPPEToevcKxUQ_Iu9AfoGIsz8FRQrSfJzfCj0ob0/edit?usp=sharing",
        description: "The bank is at your service! Go to the above link to access Disboard's Bank.",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
};
