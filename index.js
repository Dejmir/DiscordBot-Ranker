const Discord = require("discord.js");
const ms = require("ms");
const Bot = new Discord.Client();

var prefix = "!";

Bot.on("ready", () => {
  Bot.user.setActivity("!help to use", "STREAMING");
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
        "name": "Bot owner/programmer",
        "value": "Nick: Daniel#1003 Id: 335454224886267914"
      },
      {
        "name": "Druga wersja ?",
        "value": "A no bo druga wersja jest napisana w innym języku dlatego jest v2"
      },
      {
        "name": "Jakie są komendy ?",
        "value": "Narazie żadne oprócz ''!help''"
      },
      {
        "name": "Status ukończenia bota",
        "value": "18% (W przybliżeniu)"
      }
    ]
  };

  Bot.on("message", (message) => {
    //RANK COMMAND
    //
    //
    //
    //
    //
    var RCommand = "rank";

    if(message.content.startsWith(prefix + RCommand))
    {
      if(message.member.hasPermission("ADMINISTRATOR"))
      {
        let userR = message.guild.member(message.mentions.users.first());
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let rank = args[2];
        let time = args[1]
        if(!userR) return message.channel.send("Nie znaleziono takiego użytkownika");
        if(!rank) return message.channel.send("Błąd");
        if(!time) return message.channel.send("Błąd");
        var vtime = time;
        time = time * 60000;

        var role = message.guild.roles.find("name", rank);
        role;
        //message.channel.send(rank);
        //message.channel.send(`${role}`);
        if(!role) return message.channel.send("Błąd")
        userR.addRole(role).catch(err => {
          message.channel.send("Error");
        });
        message.channel.send(`${userR} dostał range: ${rank} na: ${vtime} minut/y`);
        setTimeout(function(){
          userR.removeRole(role);
          message.channel.send(`${userR} Została zabrana ranga: ${role}`);
        }, (time));
      }
      else{
        message.reply("Nie masz uprawnień");
      }
    }
    //BAN COMMAND
    //
    //
    //
    //
    //
    if(message.content.startsWith(prefix + "ban"))
  
    if(message.member.hasPermission("BAN_MEMBERS"))
    {
      const args = message.content.split(' ').slice(1);
      const user = message.mentions.users.first();
      var banReason = args.slice(1).join(' ');
      if(!user)
      {
        message.channel.send("Poprawne użycie komendy: !ban @użytkownik PowódOpcjonalny")
      }
      banReason += "Brak podanego powodu";
      message.guild.ban(user, banReason).then(() => {
          message.channel.send(`${user} został zbanowany, powód: ${banReason}!`);
      }).catch(err => {
          message.channel.send("Błąd");
          console.log(err);
      });
      //TEST
      //
      //
      //
      //
      //
    }
      if(message.content.startsWith(prefix + "test"))
      {
        message.channel.send("Das works!");
      }
      //HELP
      //
      //
      //
      //
      //
    if(message.content.startsWith(prefix + "help"))
    {
      var authorr = message.member.id;
      //message.channel.send(authorr);
      if(authorr == 335454224886267914)
      {
        message.channel.send("Select language !").then(async msg => {
          var pl = await msg.react("🇵🇱");
          var us = await msg.react("🇺🇸");
          pl;
          us;
          await msg.react("🤔");
          for (let index = 0; index < 15000; index++) {
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
            message.channel.send("This bot is only for polish people ;)").then(async msg2 => {
              setTimeout(function(){
                msg2.delete();
              }, (6000));
            })
            setTimeout(function(){
              msg.delete();
            }, (6000));
          }
        })
      }
  }
});

Bot.login(process.env.token);
