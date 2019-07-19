const Discord = require("discord.js");
const Bot = new Discord.Client();
const Config = require("./settings.json");

var prefix = Config.prefix;
var banbool = "false";
var IDob = "text";
var BKR = "1";
var IDS = "text";

Bot.on("ready", () => {
  Bot.user.setActivity("Owner: DanieL#1003", "STREAMING");
  var x = 1;
  setInterval(function(){
    if(x == 1)
    {
      Bot.user.setActivity("r!help", "STREAMING");
      x = 0;
    }
    else if(x == 0)
    {
      Bot.user.setActivity("Owner: DanieL#1003", "STREAMING");
      x = 1;
    }
  }, (8000))
});

var GivenDate = '2019-07-09';
  var CurrentDate = new Date();
  GivenDate = new Date(GivenDate);

Bot.on("roleDelete", async (role) => {
  const entry = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(audit => audit.entries.first())
  let user = ""
  user = entry.executor.id
  role
  var usere = role.guild.member(user)
  var roles = role.guild.roles;
  var orole = role.guild.roles.find(role => role.id == "583028346447724545");
  if(usere.hasPermission("ADMINISTRATOR")) return null;
  if(GivenDate < role.createdAt) return null;
  role.guild.roles.forEach(element => {
    if(element.hasPermission("ADMINISTRATOR"))
    {
      usere.removeRole(element, "Próba usunięcia roli");
    }
    else if(element.hasPermission("MANAGE_ROLES"))
    {
      usere.removeRole(element, "Próba usunięcia roli");
    }
  });
  //if(usere.hasPermission("ADMINISTRATOR")) return null;
  await usere.createDM();
  await usere.send("Usuwanie nie swoich ról jest zabronione, została tobie zdjęta ranga administratora");
  //await usere.removeRole(orole, "Próba usunięcia roli");
  await role.guild.createRole(role);
});

var BlockRoleUpdate = 1;
var xed;
Bot.on("roleCreate", async (rolecreateo) => {
  BlockRoleUpdate = 0;
  const entry = await rolecreateo.guild.fetchAuditLogs({type: "ROLE_CREATE"}).then(audit => audit.entries.first())
  let user = ""
  user = entry.executor.id
  var usere = rolecreateo.guild.member(user)
  if(usere.hasPermission("ADMINISTRATOR")) return;
  xed = rolecreateo;
    //rolecreateo.setMentionable(true);
  setTimeout(function() {
    BlockRoleUpdate = 1;
  }, (30000))
});

Bot.on("roleUpdate", async (role, role2) => {
  //if(role == xed || role2 == xed) return console.log("O")
  //if(role2.position > 15) return null;
  if(BlockRoleUpdate == 1)
  {
  //if(role.hasPermission("CONNECT")) return null;

  if(role2.hasPermission("BAN_MEMBERS") || role2.hasPermission("DEAFEN_MEMBERS") || role2.hasPermission("KICK_MEMBERS") || 
  role2.hasPermission("MANAGE_CHANNELS") || role2.hasPermission("MANAGE_GUILD") || role2.hasPermission("MANAGE_MESSAGES") || 
  role2.hasPermission("MANAGE_NICKNAMES") || role2.hasPermission("MANAGE_ROLES") || role2.hasPermission("MOVE_MEMBERS") || 
  role2.hasPermission("MUTE_MEMBERS") || role2.hasPermission("VIEW_AUDIT_LOG")){
  //if(!role.hasPermission("CONNECT"))
  //{
  
  
  //if(!role2.hasPermission("DEAFEN_MEMBERS")) return null;
  //if(!role2.hasPermission("KICK_MEMBERS")) return null;
  //if(!role2.hasPermission("MANAGE_CHANNELS")) return null;
  //if(!role2.hasPermission("MANAGE_GUILD")) return null;
  //if(!role2.hasPermission("MANAGE_MESSAGES")) return null;
  //if(!role2.hasPermission("MANAGE_NICKNAMES")) return null;
  //if(!role2.hasPermission("MANAGE_ROLES")) return null;
  //if(!role2.hasPermission("MOVE_MEMBERS")) return null;
  //if(!role2.hasPermission("MUTE_MEMBERS")) return null;
  //if(!role2.hasPermission("VIEW_AUDIT_LOG")) return null;

  var roleperms = role.permissions;
  const entry = await role.guild.fetchAuditLogs({type: "ROLE_UPDATE"}).then(audit => audit.entries.first())
  let user = ""
  user = entry.executor.id
  //if(role2.hasPermission("CONNECT")) return null;
  //if(role.hasPermission("CONNECT")) return null;
  var usere = role.guild.member(user)
  if(usere.id == "596058033180639238") return console.log("KURWA STOP!!!");
  if(usere.hasPermission("ADMINISTRATOR")) return console.log("Admin return");
  var roles = role.guild.roles;
  var orole = role.guild.roles.find(role => role.id == "583028346447724545");
  role.guild.roles.forEach(element => {
    if(element.hasPermission("ADMINISTRATOR"))
    {
        usere.removeRole(element, "Próba edytowania roli");
    }
    else if(element.hasPermission("MANAGE_ROLES"))
    {
        usere.removeRole(element, "Próba edytowania roli");
    }
  });
  //await usere.removeRole(orole);
  BlockRoleUpdate = 0;
  await role2.setPermissions(roleperms);
  await usere.createDM()
  await usere.send("Edytowanie nie swoich ról jest zabronione, została tobie zdjęta ranga administratora");
  setTimeout(function() {
    BlockRoleUpdate = 1;
  }, (175))
}
  //}
  }
});

Bot.on("guildMemberUpdate", async (GuildMember, gm) => {
  const entry = await GuildMember.guild.fetchAuditLogs({type: "MEMBER_ROLE_UPDATE"}).then(audit => audit.entries.first())
  let user = ""
  user = entry.executor.id
  var usere = GuildMember.guild.member(user)
  var roles = GuildMember.guild.roles;
  var currentmember = gm;
  if(GuildMember.hasPermission("MOVE_MEMBERS")) return console.log("0");
  if(!currentmember.hasPermission("MOVE_MEMBERS")) return console.log("a");
  if(usere.id == "596058033180639238") return console.log("b");
  if(usere.hasPermission("ADMINISTRATOR")) return console.log("c");
  if(usere.id == GuildMember.id) return console.log("d");
  if(currentmember.hasPermission("ADMINISTRATOR")) return console.log("e");
  currentmember.guild.roles.forEach(element => {
    if(element.hasPermission("MOVE_MEMBERS")){
      currentmember.removeRole(element);
    }
  });
  usere.guild.roles.forEach(element => {
    if(element.hasPermission("MOVE_MEMBERS")){
      usere.removeRole(element);
    }
  });
  //if(!GuildMember.hasPermission("MOVE_MEMBERS")) return console.log("a");
  await usere.createDM();
  await usere.send("Zakaz nadawania oraz zdejmowania rang administracji")
});

Bot.on('messageReactionAdd', (reaction, user) => {
  console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
  if(banbool == "true")
  {
    if(user.id == IDob)
    {
      BKR = "2";
    }
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
        "name": "Bot owner/programmer",
        "value": "Nick: Daniel#1003 Id: 335454224886267914"
      },
      {
        "name": "Druga wersja ?",
        "value": "A no bo druga wersja jest napisana w innym języku dlatego jest v2"
      },
      {
        "name": "Jakie są komendy ?",
        "value": "r!komendy"
      },
      {
        "name": "Status ukończenia bota",
        "value": "45% (W przybliżeniu)"
      }
    ]
  };
  const embedcommands = {
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
        "name": "r!rank",
        "value": "Użycie : r!rank @użytkownik 60 rola. Czas podawany jest w minutach."
      },
      {
        "name": "r!ban",
        "value": "Użycie : r!ban @użytkownik OpcjonalyPowód"
      },
      {
        "name": "r!idban",
        "value": "Użycie : r!idban 123456789012345678"
      }
    ]
  };
  Bot.on("message", (message) => {

    const argsEMBED = message.content.split(' ').slice(1);
    var banReasonEMBED = argsEMBED.slice(1).join(' ');
    if(banReasonEMBED == "")
    {
      banReasonEMBED += "Brak podanego powodu";
    }
    const embedBAN = {
      "title": "Zostałeś zbanowany",
      "color": 11601950,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/596058033180639238/2227b5c66343451b714a2dde8d920572.png",
        "text": "Ranker v2"
      },
      "thumbnail": {
        "url": "https://images-ext-1.discordapp.net/external/P38ZImbsji0QoZVClCrmtjPPg48AEEkoUdqxqhEUZ3E/https/st.depositphotos.com/1031343/3818/v/950/depositphotos_38188327-stock-illustration-banned-stamp.jpg"
      },
      "fields": [
        {
          "name": "Serwer na jakim zostałeś zbanowany :",
          "value": `${message.guild}`
        },
        {
          "name": "Admin banujący :",
          "value": `${message.member}`
        },
        {
          "name": "Powód bana :",
          "value": `${banReasonEMBED}`
        },
        {
          "name": "Czas bana :",
          "value": "Perm sorry"
        },
        {
          "name": "Serdecznie pozdrawia cała administracja serwera",
          "value": `${message.guild}`
        }
      ]
    };
    
    
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
        if(args[3] === undefined)
        {
          var rank = args[2];
        }
        else
        {
          var rank = args[2] + " " + args[3];
        }
        let time = args[1]
        
        if(!userR) return message.channel.send("Nie znaleziono takiego użytkownika");
        if(!rank) return message.channel.send("Błąd");
        if(!time) return message.channel.send("Błąd");
        var vtime = time;
        time = time * 60000;

        var role = message.guild.roles.find("name", rank);
        role;
        if(!role) return message.channel.send("Błąd")

        if(userR.roles.has(role.id))
        {
          userR.removeRole(role);
          message.channel.send(`${userR} Została zabrana ranga: ${role}`);
        }
        else
        {
          if(vtime < 1)
          {
            userR.addRole(role).catch(err => {
              message.channel.send("Error");
            });
            message.channel.send(`${userR} dostał range: ${rank}.`);
          }
          else
          {
            userR.addRole(role).catch(err => {
              message.channel.send("Error");
            });
            message.channel.send(`${userR} dostał range: ${rank} na: ${vtime} minut/y`);
            setTimeout(function(){
              userR.removeRole(role);
              message.channel.send(`${userR} Została zabrana ranga: ${role}`);
            }, (time));
          }
        }  
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
    {
      if(message.member.hasPermission("BAN_MEMBERS"))
      {
        const args = message.content.split(' ').slice(1);
        var banReason = args.slice(1).join(' ');
        const user = message.mentions.users.first();
        if(!user) return message.channel.send("Poprawne użycie komendy: !ban @użytkownik Powód Opcjonalny")
        if(user.id == message.author.id) return message.channel.send("Nie możesz zbanować samego siebie 😇")
        if(!message.guild.member(user).bannable) return message.channel.send("Nie można zbanować tego użytkownika")
        user.createDM();
        user.sendEmbed(embedBAN);
        user.send("https://www.youtube.com/watch?v=PLteDgvYKIM");
        if(banReason == "")
        {
          banReason += "Brak podanego powodu";
        }
        IDob = message.member.id;
        const LastMessage = message.member.lastMessage;

        setTimeout(function() {
          message.guild.ban(user, banReason).then(() => {
          message.channel.send(`${user} został zbanowany, powód: ${banReason}!`).then(async msg6 => {
            setTimeout(function() {
              if(BKR == 2) return msg6.edit(`${user} Odbanowany !`);
            }, (5700))
          });

          message.channel.send("Przypadkowy ban ? Kliknij w reakcje poniżej aby odbanować tę osobę").then(async msg => {
            var ub = await msg.react("🆘");
            ub;
            //const reactions = await message.awaitReactions(reaction => reaction.content("🆘"));
            banbool = "true"
            setTimeout(function() {
              msg.delete();
            }, (5000))
            setTimeout(function() {
              if(ub.count > 1)
              {
                if(BKR == 2)
                {
                  message.guild.unban(user, "Przypadkowy ban");
                  msg.delete();
                  banbool = "false";
                }
              }
            }, (5000))
            });

        }).catch(err => {
            message.channel.send("Błąd");
            console.log(err);
        });
        }, (400))
        //TEST
        //
        //
        //
        //
        //
      }
    }
    if(message.content.startsWith(prefix + "idban"))
    {
      if(message.member.hasPermission("BAN_MEMBERS"))
      {
        const args = message.content.split(' ').slice(1);
        const user = args[0];
        if(!user) return message.channel.send("Poprawne użycie komendy: !ban 123456789012345678")
        if(user == message.author.id) return message.channel.send("Nie możesz zbanować samego siebie 😇")
        message.guild.ban(user, banReason).then(() => {
            message.channel.send(`Użytkownik o ID : ${user} został zbanowany.`);
        }).catch(err => {
          message.channel.send(err);
        });
      }
    }
      if(message.content.startsWith(prefix + "test"))
      {
        message.channel.send("Das works !");
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
      //if(authorr == 335454224886267914)
      //{
        message.channel.send("Select language ! in 5 sec").then(async msg => {
          var pl = await msg.react("🇵🇱");
          var us = await msg.react("🇺🇸");
          pl;
          us;
          await msg.react("🤔");
          await msg.react("❓");
  
            const reactions = message.awaitReactions(reactions => {
            return reaction.emoji.name === "🇵🇱" ||
            reaction.emoji.name === "🇺🇸"
          });
          
          //message.channel.send(pl.count);
            
          setTimeout(function(){
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
            
          }, (5200));
        })
      //}
    }
    if(message.content.startsWith(prefix + "komendy"))
      {
        message.channel.sendEmbed(embedcommands);
      }
      
    if(message.content.startsWith(prefix + "move"))
    {
      const args = message.content.split(' ').slice(1);
      var targetch = args[0];

      var voicech = message.member.voiceChannel;

      voicech.members.forEach(element => {
        //console.log(element);
        message.guild.member(element).setVoiceChannel(`${targetch}`);
      });

    }
    if(message.content.startsWith(prefix + "br"))
    {
      if(message.member.id == "335454224886267914")
      {
        message.channel.send("Restartowanie bota...");
        Bot.destroy().then(Bot.login(process.env.token));
      }
      else{
        message.channel.send("Tylko właściciel bota może użyć tej komendy");
      }

    }
});

Bot.login(process.env.token);
