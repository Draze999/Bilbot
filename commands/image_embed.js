const Discord = require('discord.js');
module.exports = class Embed 
{
    static EmbedGeneric(title, img, color)
    {
        const E = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle(title)
                .setImage(img)
                .setTimestamp()
        return E
    }
}