/* Copyright (C) 2021 NICO.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

 

*/

const Asena = require('../events');

const Config = require('../config');

const {MessageType} = require('cyber-queen-web-api');

const fs = require("fs")

const asena = fs.readFileSync('./media/CyberQueen.mp3') 

const Language = require('../language');

const Lang = Language.getString('_asena');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;

        }

        var CMD_HELP = '';

        if (match[1] === '') {

            Asena.commands.map(

                async (command) =>  {

                    if (command.dontAddCommandList || command.pattern === undefined) return;

                    try {

                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);

                    } catch {

                        var match = [command.pattern];

                    }

    

                    var HANDLER = '';

    

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {

                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];

                    } else {

                        HANDLER = '.';

                    }

                    CMD_HELP += '🎃 ' + Lang.COMMAND + ': ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');

                    if (command.desc !== '') CMD_HELP += '*👋 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');

                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';

                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }

            );

        

            await message.client.sendMessage(

                message.jid,'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ Menu```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}

            );    

        } else {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;

            }

            var CMD_HELP = '';

            Asena.commands.map(

                async (command) =>  {

                    if (command.dontAddCommandList || command.pattern === undefined) return;

                    try {

                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);

                    } catch {

                        var cmatch = [command.pattern];

                    }

                

                    if (cmatch[2] == match[1]) {

                        var HANDLER = '';

    

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {

                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];

                        } else {

                            HANDLER = '.';

                        }

                        CMD_HELP += '🔱 ' + Lang.COMMAND + ': ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');

                        if (command.desc !== '') CMD_HELP += '*⚓ ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');

                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';

                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }

                }

            );

            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;

            await message.client.sendMessage(

                message.jid,'```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ Menu ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ```\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}

            );

        }

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'help ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;

        }

        var CMD_HELP = '';

        if (match[1] === '') {

            Asena.commands.map(

                async (command) =>  {

                    if (command.dontAddCommandList || command.pattern === undefined) return;

                    try {

                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);

                    } catch {

                        var match = [command.pattern];

                    }

    

                    var HANDLER = '';

    

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {

                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];

                    } else {

                        HANDLER = '.';

                    }

                    CMD_HELP += '🔱 ' + Lang.COMMAND + ': ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');

                    if (command.desc !== '') CMD_HELP += '*⚓ ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');

                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';

                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }

            );

        

            await message.client.sendMessage(

                message.jid,'🔱᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ PUBLIC🔱\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}

            );    

        } else {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;

            }

            var CMD_HELP = '';

            Asena.commands.map(

                async (command) =>  {

                    if (command.dontAddCommandList || command.pattern === undefined) return;

                    try {

                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);

                    } catch {

                        var cmatch = [command.pattern];

                    }

                

                    if (cmatch[2] == match[1]) {

                        var HANDLER = '';

    

                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {

                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];

                        } else {

                            HANDLER = '.';

                        }

                        CMD_HELP += '🔱 ' + Lang.COMMAND + ': ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');

                        if (command.desc !== '') CMD_HELP += '*⚓ ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');

                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';

                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }

                }

            );

            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;

            await message.client.sendMessage(

                message.jid,'🔱᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ PUBLIC🔱\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}

            );

        }

    }));

}

