var data = JSON.parse(settings.JSON);

const Discord = require("discord.js");
const Bot = new Discord.Client();

Bot.status = 1;

Bot.on("message", (message) => {
    if(message.content == "ping") {
        message.reply("lol");
    }
});

Bot.login();