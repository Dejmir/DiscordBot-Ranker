var data = JSON.parse(settings.JSON);

const Discord = require("discord.js");
const Bot = new Discord.Client();

Bot.status = 1;

Bot.on("message", (message) => {
    if(message.content == "ping") {
        message.reply("lol");
    }
});

Bot.login(NTk2MDU4MDMzMTgwNjM5MjM4.XR0Nqg.auOdNR-DC7JcYf_ST1S0xqIDFHU);