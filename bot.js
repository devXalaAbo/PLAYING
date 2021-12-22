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
client.login("NTE4ODQ4NjQ2MDE2NDAxNDM0.XAQddA.s2aSeHou-oTjwXxYx1RrNQhP6YQ");
