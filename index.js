const Discord = require("discord.js");
const Bot = new Discord.Client();

var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
    
const config = require("./settings.json");
Bot.status = 1;

Bot.on("message", (message) => {
    if(message.content == "ping") {
        message.reply("lol");
    }
});

Bot.login(process.env.token);
