const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytsearch = require('yt-search')
const bot = new Discord.Client();
const Prefix = '$'
const Play = require('./play.js');
const { split } = require('ffmpeg-static');

// HELP
bot.on('message', function (msg) {
    if ((msg.content === Prefix +'help') | (msg.content === Prefix +'h'))
    {
        
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#008E00')
        .setTitle('Commands List')
        .setAuthor('Bilbot', bot.user.displayAvatarURL())
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('\u200B')
        .addFields(
            { name: '$help', value: 'Ce menu lol'},
            { name: '$play <lien/recherche>', value: 'Je joue la musique'},
            { name: '$stop', value: "J'arrête la musique"},
            { name: '\u200B', value: 'Toutes les commandes sont réductibles à la première lettre.'},
        )
        .setTimestamp()
        msg.channel.send(HelpEmbed)
    }
});
// JOIN VOCAL
bot.on('message', function (msg) {
    if ((msg.content === Prefix +'join') | (msg.content === Prefix +'j'))
    {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join();
            msg.channel.send("Channel rejoins")

        
        }
    }
});
// PLAY A MUSIC
bot.on('message', function (msg) {
    if ((msg.content.startsWith(Prefix +'play') ))
    {
        msg.delete();
        let args = msg.content.slice(6) 
        Play.execute(msg,args)
    }
    else if (msg.content.startsWith(Prefix +'p'))
    {
        let args = msg.content.slice(3) 
        Play.execute(msg,args)
    }
});
// LEAVE THE VOCAL
bot.on('message', function (msg) {
    if ((msg.content === Prefix +'stop') | (msg.content === Prefix +'s'))
    {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.leave();
            }
        }
    }
);
// STATUS
bot.on('ready', function () {
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: "Un hobbit en train de faire de la randonnée avec des nains. \n Utilisez moi avec $help",
            type: 'STREAMING',
            url: 'https://www.twitch.tv/draze999'
        }}
    )
})

bot.login("");