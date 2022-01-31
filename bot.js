const Discord = require("discord.js");
const client = new Discord.Client();
client.db = require("quick.db");


//////// playing or dnd  stream

client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "Under Development|By ZeroHost",
       type: "WATCHING",
    }
  });
});





///////////////////////
client.login("Xr4hItx0pXtvmMWp1AXY9JQF11XiNgQY");
