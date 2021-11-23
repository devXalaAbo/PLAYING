const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  streaming ////////

client.on("ready", () =>{
  console.log(`sleeping bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "dnd",
    game: {
       name: "",
       type: "PLAY",
    }
  });
});
///////////////////////

//////////////// tokn lera da bne
client.login(process.env.TOKEN);
