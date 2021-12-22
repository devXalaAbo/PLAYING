const Discord = require("discord.js");
const client = new Discord.Client();
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
client.login(process.env.TOKEN);
