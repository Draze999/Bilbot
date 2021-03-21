const Discord = require('discord.js')

module.exports = class Error {

    static AdminError()
    {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setColor('#FF3923')
            .setTitle("Error")
            .setDescription("You need to have the Administrator role in order to execute that.")
        return ErrorEmbed
    }


}
