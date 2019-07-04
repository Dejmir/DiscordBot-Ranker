const Discord = require("discord.js");
const Bot = new Discord.Client();

var prefix = "!";

Bot.on("ready", () => {
  Bot.user.setActivity("", "STREAMING");
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
    }
  });

  Bot.on("message", (message) => {
    var RCommand = "rank";

    if(message.content.startsWith(prefix + RCommand))
    {
      if(message.member.hasPermission("KICK_MEMBERS"))
      {
        const args = message.content.slice(prefix.length).split(' ');

        let user = message.guild.member(message.mentions.users.first());
        let rank = args.join("").slice(22);
        if(!user) return message.channel.send("Nie można znaleźć takiego użytkownika");

        //const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        
        var role = message.guild.roles.find("name", `${rank.substr(3)}`);
        role;
        user.addRole(`${role.id}`);
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
      }
      else{
        message.reply("Nie masz uprawnień");
      }
    }
    Bot.on("message", (message) => {
      if(message.content.startsWith(prefix + "ban"))
      {
        if(message.member.hasPermission("BAN_MEMBERS"))
        {
          const args = message.content.split(' ').slice(1);
          const user = message.mentions.users.first();
          var banReason = args.slice(1).join(' ');
          banReason += "Brak podanego powodu";
          message.guild.ban(user, banReason).then(() => {
              message.channel.send(`${user} został zbanowany, powód: ${banReason}!`);
          }).catch(err => {
              //message.reply("Nie udało się zbanować tego użytkownika");
              console.log(err);
          });
          //message.channel.send(`${user} został zbanowany, powód: ${banReason}!`);
        }
      }
  });
});

Bot.login(process.env.token);
