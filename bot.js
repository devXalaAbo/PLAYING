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



client.on('ready', () => {

var channel = client.channels.cache.get('903910230444871680');

    if (channel) channel.join();

});

///////////////////////
client.login("NTE4ODQ4NjQ2MDE2NDAxNDM0.XAQddA.s2aSeHou-oTjwXxYx1RrNQhP6YQ");
