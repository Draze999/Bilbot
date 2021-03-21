const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytsearch = require('yt-search')
const bot = new Discord.Client();
const Prefix = '$'
const Play = require('./commands/play.js');
const Secret = require('./commands/secrets.js')
const Error = require ('./commands/error.js');
const ImageEm = require("./commands/image_embed.js")
const { split } = require('ffmpeg-static');

//███████╗███████╗ ██████╗██████╗ ███████╗████████╗
//██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝╚══██╔══╝
//███████╗█████╗  ██║     ██████╔╝█████╗     ██║   
//╚════██║██╔══╝  ██║     ██╔══██╗██╔══╝     ██║   
//███████║███████╗╚██████╗██║  ██║███████╗   ██║   
//╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   

bot.on('message', function (msg) {
    if ((msg.content === Prefix + 'marcassin'))
    {
        Secret.marcassin(msg)
    }
    if ((msg.content === Prefix + 'hypercube'))
    {
        Secret.hypercube(msg)
    }
}
);

//██╗  ██╗██╗███████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
//██║  ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
//███████║██║███████╗   ██║   ██║   ██║██████╔╝ ╚████╔╝ 
//██╔══██║██║╚════██║   ██║   ██║   ██║██╔══██╗  ╚██╔╝  
//██║  ██║██║███████║   ██║   ╚██████╔╝██║  ██║   ██║   
//╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝    

bot.on('message', function(msg)
{
    if ((msg.content === Prefix + 'version') | (msg.content === Prefix + 'v'))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        const HistoryEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Versions List')
        .setAuthor('Bilbot', bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription('\u200B')
        .addFields(
            { name: 'V 1.0', value: '08/03/2021 : Arrivée du bot.'},
            { name: 'V 1.1 : Musical Update', value: "08/03/2021 : Arrivée des commandes 'play' et 'stop'"},
            { name: 'V 1.2 : Git Update', value: '09/03/2021 : Arrivée du bot sur GitHub'},
            { name: 'V 1.3 : Pictural Update', value: "15/03/2021 : Arrivée de la commande 'pp'"},
            { name: 'V 1.4 : Secret Update', value: "21/03/2021 : Arrivée de cet historique et des commandes secrètes ( ͡° ͜ʖ ͡°)"},
            { name: 'Upcoming', value: "Playlist musicales"},
        )
        .setTimestamp()
        msg.channel.send(HistoryEmbed)
    }
})

//██╗  ██╗███████╗██╗     ██████╗ 
//██║  ██║██╔════╝██║     ██╔══██╗
//███████║█████╗  ██║     ██████╔╝
//██╔══██║██╔══╝  ██║     ██╔═══╝ 
//██║  ██║███████╗███████╗██║     
//╚═╝  ╚═╝╚══════╝╚══════╝╚═╝    

bot.on('message', function (msg) {
    if ((msg.content === Prefix +'help') | (msg.content === Prefix +'h'))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#008E00')
        .setTitle('Commands List')
        .setAuthor('Bilbot', bot.user.displayAvatarURL())
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('\u200B')
        .addFields(
            { name: '$help', value: 'Ce menu lol'},
            { name: '$version', value: 'Renvoie un historique de toutes les version du bot'},
            { name: '$pp', value: 'Affiche la photo de profil de la personne mentionnée après ce message'},
            { name: '$play <lien/recherche>', value: 'Je joue la musique'},
            { name: '$stop', value: "J'arrête la musique"},
            { name: '\u200B', value: 'Toutes les commandes sont réductibles à la première lettre.'},
            { name: '\u200B', value: "Selon d'anciens écrits, il existerait des commandes connues du Créateur uniquement..."},
        )
        .setTimestamp()
        msg.channel.send(HelpEmbed)
    }
});

//     ██╗ ██████╗ ██╗███╗   ██╗    ██╗   ██╗ ██████╗  ██████╗ █████╗ ██╗     
//     ██║██╔═══██╗██║████╗  ██║    ██║   ██║██╔═══██╗██╔════╝██╔══██╗██║     
//     ██║██║   ██║██║██╔██╗ ██║    ██║   ██║██║   ██║██║     ███████║██║     
//██   ██║██║   ██║██║██║╚██╗██║    ╚██╗ ██╔╝██║   ██║██║     ██╔══██║██║     
//╚█████╔╝╚██████╔╝██║██║ ╚████║     ╚████╔╝ ╚██████╔╝╚██████╗██║  ██║███████╗
// ╚════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝      ╚═══╝   ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝

bot.on('message', function (msg) {
    if ((msg.content === Prefix +'join') | (msg.content === Prefix +'j'))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join();
            msg.channel.send("Channel rejoins")
        }
    }
});

//██╗     ███████╗ █████╗ ██╗   ██╗███████╗    ██╗   ██╗ ██████╗  ██████╗ █████╗ ██╗     
//██║     ██╔════╝██╔══██╗██║   ██║██╔════╝    ██║   ██║██╔═══██╗██╔════╝██╔══██╗██║     
//██║     █████╗  ███████║██║   ██║█████╗      ██║   ██║██║   ██║██║     ███████║██║     
//██║     ██╔══╝  ██╔══██║╚██╗ ██╔╝██╔══╝      ╚██╗ ██╔╝██║   ██║██║     ██╔══██║██║     
//███████╗███████╗██║  ██║ ╚████╔╝ ███████╗     ╚████╔╝ ╚██████╔╝╚██████╗██║  ██║███████╗
//╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝      ╚═══╝   ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝
                                                                                       
bot.on('message', function (msg) {
    if ((msg.content === Prefix +'stop') | (msg.content === Prefix +'s'))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then
            msg.member.voice.channel.leave();
            }
        }
    }
);

//██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗    ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
//██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝    ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
//██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗      ██║██╔████╔██║███████║██║  ███╗█████╗  
//██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝      ██║██║╚██╔╝██║██╔══██║██║   ██║██╔══╝  
//██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗    ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
//╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

bot.on('message', function (msg) {
    if (msg.content.startsWith(Prefix +'pp'))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
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
                msg.channel.send(ImageEm.EmbedGeneric(userr.username, userr.displayAvatarURL({ dynamic: true, size: 512 }), "#00008b"))}
            catch
            {
                console.log("Erreur")
                msg.channel.send("Cet ID n'est pas associé à un utilisateur.")
            }
        }

    }
});

//██████╗ ██╗      █████╗ ██╗   ██╗    ███╗   ███╗██╗   ██╗███████╗██╗ ██████╗
//██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝    ████╗ ████║██║   ██║██╔════╝██║██╔════╝
//██████╔╝██║     ███████║ ╚████╔╝     ██╔████╔██║██║   ██║███████╗██║██║     
//██╔═══╝ ██║     ██╔══██║  ╚██╔╝      ██║╚██╔╝██║██║   ██║╚════██║██║██║     
//██║     ███████╗██║  ██║   ██║       ██║ ╚═╝ ██║╚██████╔╝███████║██║╚██████╗
//╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝       ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝
                                                                            
bot.on('message', function (msg) {
    if ((msg.content.startsWith(Prefix +'play') ))
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        msg.delete();
        let args = msg.content.slice(6) 
        Play.execute(msg,args)
    }
    else if (msg.content.startsWith(Prefix +'p') && (!msg.content.startsWith(Prefix + 'pp')) )
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        let args = msg.content.slice(3) 
        Play.execute(msg,args)
    }
});

//███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
//██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
//███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
//╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
//███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
//╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝
                                                   
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

//██╗      ██████╗  ██████╗ ██╗███╗   ██╗
//██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
//██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
//██║     ██║   ██║██║   ██║██║██║╚██╗██║
//███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
//╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                       
bot.login("ODE4NDg5OTQ4NjA0NDY1MTYz.YEY0Kg.iCPeHa6XMOidsbZDg8rAZP3Y6mk");