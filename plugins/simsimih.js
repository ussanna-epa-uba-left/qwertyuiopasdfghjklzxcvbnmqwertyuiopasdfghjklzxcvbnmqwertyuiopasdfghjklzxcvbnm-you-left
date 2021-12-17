Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
	    if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ' + Lang.BOT +' ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
