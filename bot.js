const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  stream

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "online",
    game: {
       name: ", ",
       type: "PLAYING",
    }
  });
});

///////////////////////
client.login(process.env.TOKEN);
