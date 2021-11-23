const Discord = require("discord.js");
const jano = new Discord.Client();
//////// playing or dnd  streaming ////////
jano.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`ldle`];
  setInterval(function() {
    let ldle = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user
      .setActivity(ldle, {
      
      type: "PLAYING",
      status: "ldle",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
jano.on("ready", () => {
  var join = jano.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne
jano.login(process.env.TOKEN);
