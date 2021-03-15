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
        console.log (msg.author.username + " : " + msg.content)
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#008E00')
        .setTitle('Commands List')
        .setAuthor('Bilbot', bot.user.displayAvatarURL())
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('\u200B')
        .addFields(
            { name: '$help', value: 'Ce menu lol'},
            { name: '$pp', value: 'Affiche la photo de profil de la personne mentionnée après ce message'},
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
        console.log (msg.author.username + " : " + msg.content)
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join();
            msg.channel.send("Channel rejoins")
        }
    }
});
// PHOTO DE PROFIL
bot.on('message', function (msg) {
    if (msg.content.startsWith(Prefix +'pp'))
    {
        console.log (msg.author.username + " : " + msg.content)
        let ping = msg.content.slice(7,-1)
        var regex = /[0-9]{18}/
        if (!regex.test(ping))
        {
            msg.channel.send("Veuillez Mentionner quelqu'un.")
        }
        else
        {
            let userr = bot.users.cache.find(user => user.id === ping)
            try{
                const PdpEmbed = new Discord.MessageEmbed()
                .setColor("#00008b")
                .setTitle(userr.username)
                .setImage(userr.displayAvatarURL({ dynamic: true, size: 512 }))
                .setTimestamp()
                
        
                msg.channel.send(PdpEmbed)}
            catch
            {
                console.log("Erreur")
                msg.channel.send("Cet ID n'est pas associé à un utilisateur.")
            }
        }

    }
});
// PLAY A MUSIC
bot.on('message', function (msg) {
    if ((msg.content.startsWith(Prefix +'play') ))
    {
        console.log (msg.author.username + " : " + msg.content)
        msg.delete();
        let args = msg.content.slice(6) 
        Play.execute(msg,args)
    }
    else if (msg.content.startsWith(Prefix +'p') && (!msg.content.startsWith(Prefix + 'pp')) )
    {
        console.log (msg.author.username + " : " + msg.content)
        let args = msg.content.slice(3) 
        Play.execute(msg,args)
    }
});
// LEAVE THE VOCAL
bot.on('message', function (msg) {
    if ((msg.content === Prefix +'stop') | (msg.content === Prefix +'s'))
    {
        console.log (msg.author.username + " : " + msg.content)
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then
            msg.member.voice.channel.leave();
            }
        }
    }
);
// TROLL MARCASSIN
bot.on('message', function (msg) {
    if ((msg.content === 'marcassin'))
    {
        console.log (msg.author.username + " : " + msg.content)
        msg.delete()
        msg.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sus_scrofa_3_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg/1200px-Sus_scrofa_3_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg")
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
// LOGIN
bot.login("ODE4NDg5OTQ4NjA0NDY1MTYz.YEY0Kg.iCPeHa6XMOidsbZDg8rAZP3Y6mk");