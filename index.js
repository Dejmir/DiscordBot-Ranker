const Discord = require('discord.js');
const Bot = new Discord.Client();

var prefix = "!";

Bot.on("ready", () => {
  Bot.user.setActivity("J3BAĆ PiS", "STREAMING");
});

Bot.on("message", (message) => {
    if(message.content.startsWith(prefix + "test"))
    {
        message.channel.send("Das works!");
    }
});

const embed = {
    "color": 111,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/596058033180639238/2227b5c66343451b714a2dde8d920572.png"
    },
    "author": {
      "name": "Ranker",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/avatars/596058033180639238/2227b5c66343451b714a2dde8d920572.png"
    },
    "fields": [
      {
        "name": "Wtf z tą wersją drugą ?",
        "value": "A no bo druga wersja jest napisana w innym języku dlatego jest v2"
      },
      {
        "name": "Jakie są komendy ?",
        "value": "Narazie żadne oprócz ''!help''"
      },
      {
        "name": "Status ukończenia bota",
        "value": "5% (W przybliżeniu)"
      }
    ]
  };

Bot.on("message", (message) => {
    if(message.content.startsWith(prefix + "help"))
    {
      var authorr = message.author.id;
      if(authorr == 3354542248862679140)
      {
        message.channel.send("Select language !").then(async msg => {
          var pl = await msg.react("🇵🇱");
          var us = await msg.react("🇺🇸");
          pl;
          us;
          await msg.react("🤔");
          for (let index = 0; index < 3500; index++) {
            console.log(pl.count);
          
          }
          await msg.react("❓");
          for (let index = 0; index < 500; index++) {
            console.log(pl.content)
          
          }

          const reactions = message.awaitReactions(reactions => {
            return reaction.emoji.name === "🇵🇱" ||
            reaction.emoji.name === "🇺🇸"
          });
        
          //message.channel.send(pl.count);

          if(pl.count > 1)
          {
            msg.edit({embed});
            msg.clearReactions();
          }
          if(us.count > 1)
          {
            message.channel.send("Stany zjednoczone");
          }
        })
      }
      else
      {
        message.channel.send("Nic tu jescze nie ma");
      }
    }
  });

Bot.login(process.env.token);
