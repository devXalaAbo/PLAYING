const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  stream

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "In development, it will be completed soon",
       type: "PLAYING",
    }
  });
});


///////////////////////
client.login(process.env.TOKEN)
