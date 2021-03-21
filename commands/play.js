const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
var TrueFile = new Array();

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        // PRECONDITIONS

        if (!voiceChannel) return message.channel.send('Il faut être dans un channel vocal pour utiliser cette commande.');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send("Tu n'as pas les permissions requises");
        if (!permissions.has('SPEAK')) return message.channel.send("Tu n'as pas les permissions requises");
        if (!args.length) return message.channel.send('Veuillez entrer un URL.'); 
        
        // TEST URL VALIDE

        const validURL = (str) =>{
            var regex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        // REJOINS LE VOCAL
        const  connection = await voiceChannel.join();

        // PLAYING MUSIC
        if (!validURL(args))
        {

            message.channel.send(":warning: Musique par recherche temporairement désactivée :warning:")
            voiceChannel.leave()
            return
        // ************************************************************************************************************************
            // RECHERCHE PAR MOTS
            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);
                return videoResult.videos[0].url;
            }
            const video = await videoFinder(args);
            TrueFile.push(video)
            TrueFile.forEach(element => {
                console.log(element)
            });
            // STREAM AUDIO

            
            if (TrueFile.length==1)
            {
                const stream  = ytdl(await video, {filter: 'audioonly'});
                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    TrueFile.shift()
                    console.log(TrueFile)
                    if (TrueFile.length==0)
                    {
                        console.log("bybye")
                        voiceChannel.leave()
                    }
                    else
                    {
                        this.execute(message, TrueFile[0])
                    }
                })
            }
            
            await message.channel.send(`Musique par recherche : ***${(await ytdl.getBasicInfo(video)).videoDetails.title}***`)
        }
        // ************************************************************************************************************************
        else
        {
            const video = args;

            // STREAM AUDIO

            const stream  = ytdl(await video, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave()
            });
            try 
            {
                await message.channel.send(`Musique par URL : ***${(await ytdl.getBasicInfo(video)).videoDetails.title}***`)
            }
            catch
            {
                await message.channel.send("Musique par URL **non trouvée**. ***D'abord, vérifiez votre lien***, puis retirez les particules telles que **'&list=...', '&index=...'** ainsi que leurs arguments.")
                voiceChannel.leave()
            }

            
            
        }
        
        
        }

    }