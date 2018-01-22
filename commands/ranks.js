exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 3447003,
        author: {
            name: "Mee6 Ranking"
        },
        description: "**Ghost** - Lvl. 0\n**Skeleton** - Lvl. 2\n**Zombie** - Lvl. 5\n**Undead Warrior** - Lvl. 7\n**Ghoul** - Lvl. 10\n**Necromancer** - Lvl. 12\n**Death Knight** - Lvl. 15\n**Undead Drakes** - 17\n**Vampire** - Lvl. 20\n**Lich Apprentice** - Lvl. 22\n**Lich** - Lvl. 25\n**Demonic Warrior** - Lvl. 30\n**Demonic Knight** - Lvl. 35\n**Demonic King** - Lvl. 40\n**The Fallen** - Lvl. 50",
        timestamp: new Date(),
        footer: {
          text: "Role ranking list"
        }
      }
    });
}
