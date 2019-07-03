const Discord = require("discord.js");
const Bot = new Discord.Client();

const config = require("./settings.json");
Bot.status = 1;

var prefix = "!";

Bot.on("message", (message) => {
    if(message.content.startsWith(prefix + "test"))
    {
        message.channel.send("Das works!");
    }
});

Bot.login(process.env.token);
