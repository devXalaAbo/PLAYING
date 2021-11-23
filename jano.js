const Discord = require("discord.js");
const smsm = new Discord.Client();
//////// playing or dnd  streaming ////////
smsm39smsm39.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `By : SMSM`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    smsm39.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
})smsm39.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `By : SMSM`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    smsm39.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
}.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `By : SMSM`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    smsm39.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
smsm.on("ready", () => {
  var join = smsm.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne
smsm.login(process.env.TOKEN);
smsm.login(process.env.TOKEN2);
