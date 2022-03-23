import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'list', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/36783a395d86adbf9fcd4.mp4','https://telegra.ph/file/fe3325fb5fa3da1de4c04.mp4','https://telegra.ph/file/29a367457d46721b59528.mp4','https://telegra.ph/file/02c8cb90510ad6fd1e02d.mp4','https://telegra.ph/file/0e633bf979e25ef592c10.mp4','https://telegra.ph/file/0fde71c91c0e8813b754f.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Konnichiwa👋 ɪ ᴀᴍ 𝓜𝓪𝓻𝓲𝓷💖🖤!

ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀ!

ᴍʏ ᴘʀᴇғʀɪx ${this.client.config.prefix}
const weeb = [
    {title: 'anime', rowId:"rowid1"},
    {title: 'animequote', rowId:"rowid1"},
    {title: 'animechar', rowId:"rowid2"},
    {title: 'genshincharacter', rowId:"rowid2"},
    {title: 'husbando', rowId:"rowid2"},
    {title: 'loli', rowId:"rowid2"},
    {title: 'manga', rowId:"rowid2"},
    {title: 'pokemon', rowId:"rowid2"},
    {title: 'rpaper', rowId:"rowid2"},
    {title: 'vtuber', rowId:"rowid2"},
    {title: 'waifu', rowId:"rowid2"},
    {title: 'ameme', rowId:"rowid2"},
    {title: 'character', rowId:"rowid2"},
    {title: 'crossplay', rowId:"rowid2"},
    {title: 'haigusa', rowId:"rowid2"},
    {title: 'recommend', rowId:"rowid2"},
    {title: 'sauce', rowId:"rowid2"},
    {title: 'wallpaper', rowId:"rowid2"}
   ]
   const bots = [
    {title: 'entropy', rowId:"rowid1"},
    {title: 'guide', rowId:"rowid2"},
    {title: 'infinity', rowId:"rowid2"},
    {title: 'kaoi', rowId:"rowid2"},
    {title: 'void', rowId:"rowid2"}
   ]
   const config = [
    {title: 'disable', rowId:"rowid1"},
    {title: 'enable', rowId:"rowid2"}
   ]
   const utils = [
    {title: 'blur', rowId:"rowid1"},
    {title: 'kitten', rowId:"rowid1"},
    {title: 'sticker', rowId:"rowid1"},
    {title: 'subred', rowId:"rowid1"},
    {title: 'getgif', rowId:"rowid1"},
    {title: 'screenshot', rowId:"rowid1"},
    {title: 'steal', rowId:"rowid1"},
    {title: 'translate', rowId:"rowid1"},
    {title: 'wikipedia', rowId:"rowid1"}
   ]
   const dev = [
    {title: 'ban', rowId:"rowid1"},
    {title: 'eval', rowId:"rowid2"},
    {title: 'join', rowId:"rowid2"},
    {title: 'leave', rowId:"rowid2"},
    {title: 'status', rowId:"rowid2"},
    {title: 'unban', rowId:"rowid2"}
   ]
   const misc = [
    {title: 'retrieve', rowId:"rowid1"},
    {title: 'hi', rowId:"rowid1"},
    {title: 'itachi', rowId:"rowid1"},
   ]
   const education = [
    {title: 'calculator', rowId:"rowid1"},
    {title: 'covid', rowId:"rowid1"},
    {title: 'define', rowId:"rowid1"},
    {title: 'elements', rowId:"rowid2"},
    {title: 'github', rowId:"rowid2"},
    {title: 'urbandictionary', rowId:"rowid2"},
    {title: 'weather', rowId:"rowid2"},
   ]
   const fun = [
    {title: 'chess', rowId:"rowid1"},
    {title: 'quote', rowId:"rowid2"},
    {title: 'react', rowId:"rowid2"},
    {title: 'trigger', rowId:"rowid2"},
    {title: 'truth', rowId:"rowid2"},
    {title: 'chat', rowId:"rowid2"},
    {title: 'dare', rowId:"rowid2"},
    {title: 'fact', rowId:"rowid2"},
    {title: 'safejoke', rowId:"rowid2"},
    {title: 'ship', rowId:"rowid2"},
    {title: 'trivia', rowId:"rowid2"}]
   const general = [
       {title: 'admins', rowId:"rowid2"},
       {title: 'everyone', rowId:"rowid2"},
       {title: 'help', rowId:"rowid2"},
       {title: 'mods', rowId:"rowid2"},
       {title: 'profile', rowId:"rowid2"},
       {title: 'rank', rowId:"rowid1"},
       {title: 'xp', rowId:"rowid2"},
       {title: 'invitelink', rowId:"rowid2"},
       {title: 'delete', rowId:"rowid2"}
    ]
    const media = [
        {title: 'play', rowId:"rowid2"},
        {title: 'spotify', rowId:"rowid2"},
        {title: 'take', rowId:"rowid1"},
        {title: 'ytaudio', rowId:"rowid2"},
        {title: 'ytsearch', rowId:"rowid2"},
        {title: 'ytvideo', rowId:"rowid2"},
        {title: 'google', rowId:"rowid2"},
        {title: 'lyrics', rowId:"rowid2"},
        {title: 'pinterest', rowId:"rowid2"}
   ]
   const nsfw = [
    {title: 'anal', rowId:"rowid2"},
    {title: 'blowjob', rowId:"rowid2"},
    {title: 'nsfwdoujin', rowId:"rowid1"},
    {title: 'nsfwloli', rowId:"rowid2"},
    {title: 'nsfwpaper', rowId:"rowid2"},
    {title: 'thighs', rowId:"rowid2"},
    {title: 'hentai', rowId:"rowid2"},
    {title: 'maid', rowId:"rowid2"},
    {title: 'masturbation', rowId:"rowid2"},
    {title: 'nsfw-waifu', rowId:"rowid2"},
    {title: 'nsfwjoke', rowId:"rowid2"},
    {title: 'nsfw-neko', rowId:"rowid2"},
    {title: 'pussy', rowId:"rowid2"},
    {title: 'trap', rowId:"rowid2"},
]
   const moderation = [
    {title: 'activate', rowId:"rowid1"},
    {title: 'deactivate', rowId:"rowid2"},
    {title: 'demote', rowId:"rowid2"},
    {title: 'groupchange', rowId:"rowid2"},
    {title: 'promote', rowId:"rowid2"},
    {title: 'purge', rowId:"rowid2"},
    {title: 'remove', rowId:"rowid2"},
    {title: 'close', rowId:"rowid2"},
    {title: 'open', rowId:"rowid2"},
    {title: 'revoke', rowId:"rowid2"},
    {title: 'ppcouple', rowId:"rowid2"}]

   const sections = [
                     {title: "fun 🚀", rows: fun },
                     {title: "general 🌀", rows: general },
                     {title: "media 🎵", rows: media },
                     {title: "misc 🧿", rows: misc },
                     {title: "moderation ⚖️", rows: moderation },
                     {title: "nsfw 🚫", rows: nsfw },
                     {title: "utils 👑", rows: utils },
                     {title: "weeb ✨", rows: weeb },
                     {title: "education 📚", rows: education },

]
const txt = '\n' +
    `│⋊ ᴜꜱᴇʀ: *${M.sender.username}*\n` +
    '│⋊ ɴᴀᴍᴇ:. ❟❛❟ *MARIN-KITAGAWA\n' +
    '│⋊ ᴘʀᴇꜰɪx: ${this.client.config.prefix}\n' +
    '│⋊ ᴏᴡɴᴇʀ: <${this.client.config.prefix}mod>\n' +
    '╰────────────┈平和                            \n' +
    '\n' +
    '🚀 *Fun*🚀\n' +
    '\n' +
    '• ```chess, quote, react, trigger, truth, chat, dare, fact, safejoke, ship, trivia```\n' +
    '\n' +
    '🌀 *General*🌀\n' +
    '\n' +
    '• ```admins, everyone, help, mods, profile, rank, xp, invitelink, delete```\n' +
    '\n' +
    '🎵 *Media*🎵\n' +
    '\n' +
    '• ```ig, play, spotify, take, ytaudio, ytsearch, ytvideo, google, lyrics, pinterest```\n' +
    '\n' +
    '🧿 *Misc* 🧿\n'   +
    '\n' +
    '• ```retrieve, hi, itachi```\n' +
    '\n' +
    '⚖️ *Moderation* ⚖️\n' +
    '\n' +
    '• ```activate, deactivate, demote, groupchange, promote, purge, remove, close, open, revoke, ppcouple```\n' +
    '\n' +
    '🚫 *Nsfw*🚫\n' +
    '\n' +
    '• ```anal, blowjob, nsfwdoujin, nsfwloli, nsfwpaper, thighs, hentai, maid, masturbation, nsfw-waifu, nsfwjoke, nsfw-neko, pussy, trap```\n' +
    '\n' +
    '👑 *Utils*👑\n' +
    '\n' +
    '• ```blur, kitten, sticker, subred, getgif, screenshot, steal, translate, wikipedia```\n' +
    '\n' +
    '✨ *Weeb* ✨\n' +
    '\n' +
    '• ```anime, animequote, animechar, genshincharacter, husbando, loli, manga, pokemon, rpaper, vtuber, waifu, ameme, character, crossplay, haigusha, recommend, sauce, wallpaper```\n' +
    '\n' +
    '📚 *Educative*📚\n' +
    '\n' +
    '• ```calculator, covid, define, elements, github, urbandictionary, weather```\n' +
    '\n' +
    ' \n' +
───────────────
┌────────────┈
│  🤍マリン🤍
└────────────┈` }
        )
    }
}
