const Discord = require("discord.js");
const smsm = new Discord.Client();
//////// playing or dnd  streaming ////////

smsm.on("ready", () =>{
  console.log(`sleeping bot ${smsm.user.tag}!`);
  smsm.user.setPresence({
    status: "idle",
    game: {
       name: "Under development",
       type: "PLAYING",
    }
  });
});


///////////////////////

//////////////// tokn lera da bne
smsm.login(process.env.TOKEN);
