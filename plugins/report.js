/* Codded by @phaticusthiccy & @MrJoka-Thejaka
recoded by NICO
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Cyber = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');

const REPORT = "කණ්ඩායමේ පරිපාලකයින්ට ඔබ මෙන්ශන් දුන් පණිවුඩය වාර්තා කරයි";
const USER = "=== ```Report``` ===\n\n*User:* ";
const REASON = "\n*හේතුව:* ";
const REPLY = "*කරුණාකර ඔබට වාර්තා කිරීමට අවශ්‍ය පණිවුඩයකට මෙන්ශන් දෙන්න!*";

if (Config.WORKTYPE == 'private') {
    Cyber.addCommand({ pattern: 'report ?(.*)', fromMe: true, desc: REPORT }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0] + REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, REPLY, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    Cyber.addCommand({ pattern: 'report ?(.*)', fromMe: false, desc: REPORT }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0] + REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, REPLY, MessageType.text);
        }
    }));
    Cyber.addCommand({ pattern: 'report ?(.*)', fromMe: true, desc: REPORT, dontAddCommandList: true }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, USER + '@' + message.reply_message.jid.split('@')[0] + REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, REPLY, MessageType.text);
        }
    }));
}
