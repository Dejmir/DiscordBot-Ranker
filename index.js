socket = io.listen(process.env.PORT);

const Discord = require("discord.js");
const Bot = new Discord.Client();

const config = require("./settings.json");
Bot.status = 1;

Bot.on("message", (message) => {
    if(message.content == "ping") {
        message.reply("lol");
    }
});

Bot.login(process.env.token);
