const Discord = require("discord.js");
const client = new Discord.Client();
//////// playing or dnd  streaming ////////
client.on('ready' , () =>{
 console.log('Bot esta escuchando');
 client.user.setStatus('ldle');

 console.log('ldle', client.user.presence.status);


});

///////////////////////
client.on("ready", () => {
  var join = client.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne
client.login(process.env.TOKEN);
