import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hidetag",
			description: "hidden tag all users in group chat",
			aliases: ["shh", ",", "ht"],
			category: "moderation",
			usage: `${client.config.prefix}hidetag`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const stickers = [
			"https://wallpapercave.com/uwp/uwp2030801.png",
			"https://wallpapercave.com/uwp/uwp1895872.png",
			"https://wallpapercave.com/uwp/uwp2105457.jpeg",
			"https://wallpapercave.com/uwp/uwp1895867.png",
			"https://wallpapercave.com/uwp/uwp1895870.png",
			"https://pin.it/4L8BLPH",
		];
		const option = ["--s", "--sticker"];
		const random = stickers[Math.floor(Math.random() * stickers.length)];
		const tem = joined.trim();
                        if (!joined)
			return void (await M.reply(
				`${tem}`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const term = joined.trim();
		if (!option.includes(term))
			return void (await M.reply(
				`${term}`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const sticker: any = await new Sticker(random, {
			pack: "READ QUOTED MESSAGE",
			author: "🌟 Chitoge 🌟",
			quality: 90,
			type: "full",
			categories: ["🎊"],
		});
		return void (await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,
			M.groupMetadata?.participants.map((user) => user.jid)
		));
	};
}
