/* Codded by NICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - NICO

*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const cyber = ('Cyber Queen Github Link');
const AAA = ('CYBER QUEEN GITHUB LINK')
const AAB = "🅒🅨🅑🅔🅡 🅠🅤🅔🅔🅝 🅖🅘🅣🅗🅤🅑 🅛🅘🅝🅚 එක ඉහත ඇත,"
const AAC = "*᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ Version 🧬*\n\n```Installed version :```\n1.0v - Beta Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen"
Asena.addCommand({pattern: 'version', fromMe: true, delowndinukacmd: false, desc: AAA,}, (async (message, match) => {

  var msg = await message.reply('CYBER QUEEN Version');

  await message.client.sendMessage(
      message.jid,AAC, MessageType.text);
                                            
  }));
