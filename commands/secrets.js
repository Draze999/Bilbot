const Discord = require('discord.js');
const { EmbedGeneric } = require('./image_embed.js');
const ImageEm = require("./image_embed.js")

module.exports = class Secret 
{
    static marcassin(msg)
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        msg.delete()
        msg.channel.send(EmbedGeneric("", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sus_scrofa_3_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg/1200px-Sus_scrofa_3_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg", "#896542"))
        
    }

    static hypercube(msg)
    {
        console.log ("[" + msg.guild.name  + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
        msg.delete()
        msg.channel.send(EmbedGeneric("", "https://upload.wikimedia.org/wikipedia/commons/d/d7/8-cell.gif", "#add8e6"))
    }
}

    
