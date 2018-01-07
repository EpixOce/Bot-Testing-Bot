
exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Lostina Bank"
        },
        title: "Click Here to access Lostina's Bank, or copy the link below.",
        url: "https://docs.google.com/spreadsheets/d/1iAxOKLmsng5cjkn0m0-IKU9uOSkXWY7FWUjeIIJSvok/edit?usp=sharing",
        description: "https://docs.google.com/spreadsheets/d/1iAxOKLmsng5cjkn0m0-IKU9uOSkXWY7FWUjeIIJSvok/edit?usp=sharing",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
};
