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

let owner = ['602758334520623125' ]
client.on('message', message => {
let guildID = message.content.split(' ')[1]
let guild = client.guilds.cache.get(guildID)
if(message.content.startsWith(prefix + 'leave')) {
  if(!owner.includes(message.author.id)) return message.reply(STFU)
  
if(!guild)return message.channel.send('Send The Server ID')
message.channel.send => [${guild.name}])
guild.leave()
}
}) 

///////////////////////
client.login(process.env.TOKEN)
