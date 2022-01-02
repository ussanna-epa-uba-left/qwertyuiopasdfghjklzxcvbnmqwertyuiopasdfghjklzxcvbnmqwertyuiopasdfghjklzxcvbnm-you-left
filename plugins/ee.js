const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const Config = require('../config');
const Language = require('../language');

 Asena.addCommand({ pattern: 'btn ?(.*)', fromMe: true, desc: 'Sends Button Msg',  deleteCommand: false}, async (message, match) => { 
 if (match[1] === '') return await message.client.sendMessage(message.jid,'*Please Enter text!*',MessageType.text);
 const buttons = [
        {buttonId: '.anemnd' + match[1], buttonText: {displayText: 'ᴀɴᴇ ᴍɴᴅ' }, type: 1},
        {buttonId: '.addeh' + match[1], buttonText: {displayText: 'ᴏᴡ ɴᴇ' }, type: 1}

    ]
    const buttonMessage = {
        contentText: 'ʜᴇ ʜᴇ ʙᴜᴛᴛᴏɴ ᴍᴇꜱꜱᴀɢᴇ ᴇᴋᴀᴋ ɴᴇᴛʜᴀ',
        footerText: 'ᴄʏʙᴇʀ ǫᴜᴇᴇɴ © ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 1
    }
  await message.client.sendMessage(message.jid, buttonMessage ,MessageType.buttonsMessage);  
 })
