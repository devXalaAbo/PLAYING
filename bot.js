const Discord = require("discord.js");
const client = new Discord.Client();
client.db = require("quick.db");
const { Prefix } = require("./config.json");

//////// playing or dnd  stream

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "SAD SLEEPING",
       type: "WATCHING",
    }
  });
});





///////////////////////
client.login(config.token);
