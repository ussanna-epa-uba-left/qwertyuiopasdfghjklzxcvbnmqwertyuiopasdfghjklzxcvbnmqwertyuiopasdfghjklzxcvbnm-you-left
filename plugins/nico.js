/* Codded by Dinuka for NICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Queen bot - NICO

*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const cyber = ('Cyber Queen Github Link');
const AAA = ('CYBER QUEEN WA BOT LINKS')
const AAB = "🅒🅨🅑🅔🅡 🅠🅤🅔🅔🅝 links එක ඉහත ඇත,"
const AAC = "⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ WhatsApp BOT 1.0v BETA Edition Available now!💃🏻♥️ \n\nGithub Link :\nhttps://github.com/SLTechnicalTips/CyberQueen\n\nInstall bot : https://heroku.com/deploy?template=https://github.com/SLTechnicalTips/CyberQueen\n\nQR Code :\nhttps://replit.com/@NICONico6/CyberQueen-QR\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎"
Asena.addCommand({pattern: 'git', fromMe: true, delowndinukacmd: false, desc: AAA,}, (async (message, match) => {

  var msg = await message.reply('CYBER QUEEN GITHUB LINK');

  await message.client.sendMessage(
      message.jid,AAC, MessageType.text);

      await message.client.sendMessage(
        message.jid,AAB, MessageType.text);
                                            
  }));
