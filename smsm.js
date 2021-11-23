const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  streaming ////////

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

//////////////// tokn lera da bne
client.login(process.env.TOKEN);
client.login(process.env.TOKEN2);
