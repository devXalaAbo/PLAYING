const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  streaming ////////

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "Under Development",
       type: "PLAY",
    }
  });
});
///////////////////////

//////////////// tokn lera da bne
client.login(process.env.TOKEN);
