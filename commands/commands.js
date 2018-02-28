exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: "Commands:",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fun Commands - Prefix: #!",
        value: " - #!adv\n - #!stats\n - #!rules\n - #!changelog\n - #!server\n - #!chop\n - #!mine\n - #!forage\n - #!fish\n - #!search\n - #!catch\n - #!pet"
      },
      {
        name: "Timer - Prefix: ,",
        value: " - ,adv\n - ,sides\n - ,padv"
      }
    ],
    timestamp: new Date(),
    footer: "Commands"
  }
});
