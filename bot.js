const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  stream

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "MOVED TO SKULL| Gwastra bo Skull",
       type: "WATCHING",
    }
  });
});

///////////////////////
client.login(process.env.TOKEN);
