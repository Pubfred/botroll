const { log, TYPE } = require("./util");
const {
  GENERAL,
  REACTION_ADD,
  REACTION_REMOVE,
  ROLE_ADD,
  ROLE_REMOVE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ERROR
} = TYPE;



const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    //...
});

client.on('ready', () => {
    setTimeout(function(){ // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        var dayMillseconds = Math.round((Math.random() * 10.5) + 80) * 60000 ;
        setInterval(function(){ // repeat this every dayMillseconds
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

function sendMessage(){

    var howmany = Math.floor((Math.random() * 4) + 5) ;
    myid = '<@&569211619352117251>'
    var guild = client.guilds.get('503796710867206144');
    if(guild && guild.channels.get('550220018441256970')){
        guild.channels.get('550220018441256970').send(" $rolldrop "  +  howmany + " \n <@&569211619352117251> ");
    }

}


client.on("error", log(ERROR));

log(GENERAL)("Logging in...");


process.on("SIGINT", () => {
  client.destroy().then(() => process.exit(0));
});

client.login("TOKEN_HERE !!!!! ").catch(console.error);



