import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'Examinati',
            description: 'Displays info about chey.',
            category: 'general',
            usage: `${client.config.prefix}Eximinati`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/49d7f2ea6bf7d9c7938ab.mp4','https://telegra.ph/file/76dfbe1b38a29a999e454.mp4','https://telegra.ph/file/bd71998ba0dcc50e7df1f.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Hey I'm Aku, a student & maybe an upcoming developer in the future, Arigato for using my bot. 
            
đ«đđđđ©đšđŒđ„đ„;
Wa.me/923087880256

â­đđđ©đđȘđ;
https://github.com/Eximinati 

đźđđŁđšđ©đđđ§đđą;
ïœđąđđđđđ đČđđđïœ 

đđżđđšđđ€đ§đ;
Username: Sempai#5552

âȘŒđČđŸđŸ đđșđđâš` }
        )
    }
}
