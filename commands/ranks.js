oexports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Mee6 Ranking"
        },
        description: "**Ghost** - Lvl. 0\n**Imp** - Lvl. 5\n**Troll** - Lvl. 10\n**Werewolf** - Lvl. 20\n**Ghoul** - Lvl. 30\n**Vampire** - Lvl. 40\n**Vamp Lord** - Lvl. 50",
        timestamp: new Date(),
        footer: {
          text: ""
        }
      }
    });
}
