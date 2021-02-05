const express = require("express");
const query_coinmarket =require('./query_coinmarket.js');
const Discord = require('discord.js');
const env = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("Again I Go Unnoticed");
});
/*
app.get("/price",(req,res)=>{
    
});
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));





//client 
const client = new Discord.Client();
//client init
client.once('ready', () => {
    console.log('Ready!');
});
//client login
client.login(process.env.TOKEN);
//client respond by message
client.on('message', async message => {
    if (message.content[0] === '!') {
        let message_split = message.content.split(' ');
        if (message_split[0] == "!price") {
            const coin = message_split[1].toUpperCase();
            if (coin.length == 3) {
                console.log(coin);
                message.channel.send("**" + coin + "**" + " is " + await query_coinmarket(coin));
            }
        }
        if(message_split =="!play"){
            const song= message_split[1];
            if(song=="a"){
                
            }
        }
    }
});

