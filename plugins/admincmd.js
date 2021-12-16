/* Codded by @ʙʟᴀᴄᴋᴋɪɴɢᴅᴏᴍ

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - ᴀᴅᴇᴇsʜᴀ
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');



if (Config.LANG == 'EN') {
Asena.addCommand({pattern: 'admin$', fromMe: true, delowndinukacmd: false, desc: 'all admin command'}, (async (message, match) => {
        
            await message.sendMessage(`*✨✨♔♕ADMIN COMMAND♕♔✨✨*


*******************************************

*FOR THE ALL COMMANDS👇👇👇⋆｡˚ ⁀➷★✼☆｡* 




*🇱🇰 Command:* .clear
*✨ Description:* Its Clear Your Chat History

*🇱🇰 Command:* .configvar
*✨ Description:* details for change bot config vars

*🇱🇰 Command:* .configlist
*✨ Description:* config details

*🇱🇰 Command:* .install
*✨ Description:* Install external plugins...

*🇱🇰 Command:* .plugin
*✨ Description:* Shows the plugins you have installed.

*🇱🇰 Command:* .remove
*✨ Description:* Removes the plugin.

*🇱🇰 Command:* .ban
*✨ Description:* Ban someone in the group. Reply to message or tag a person to use command.

*🇱🇰 Command:* .add
*✨ Description:* Adds someone to the group.

*🇱🇰 Command:* .promote
*✨ Description:* Makes any person an admin.

*🇱🇰 Command:* .demote
*✨ Description:* Takes the authority of any admin.

*🇱🇰 Command:* .mute
*✨ Description:* Mute the group chat. Only the admins can send a message.

*🇱🇰 Command:* .unmute
*✨ Description:* Unmute the group chat. Anyone can send a message.

*🇱🇰 Command:* .invite
*✨ Description:* Provides the group's invitation link.

*🇱🇰 Command:* .name
*✨ Description:* Change the Group Name

*🇱🇰 Command:* .afk
*✨ Description:* It makes you AFK - Away From Keyboard.

*🇱🇰 Command:* .antispam
*✨ Description:* This command for any emergency situation about any kind of WhatsApp SPAM in Group

*🇱🇰 Command:* .filter
*✨ Description:* It adds a filter. If someone writes your filter, it send the answer. If you just write .filter, it show's your filter list.

*🇱🇰 Command:* .stop
*✨ Description:* Stops the filter you added previously.

*🇱🇰 Command:* .welcome
*✨ Description:* It sets the welcome message. If you leave it blank it shows the welcome message.

*🇱🇰 Command:* .goodbye
*✨ Description:* Sets the goodbye message. If you leave blank, it show's the goodbye message.

*🇱🇰 Command:* .restart
*✨ Description:* Restart WhatsRaviya

*🇱🇰 Command:* .shutdown
*✨ Description:* Shutdown WhatsRaviya

*🇱🇰 Command:* .dyno
*✨ Description:* Check heroku dyno usage

*🇱🇰 Command:* .setvar
*✨ Description:* Set heroku config var

*🇱🇰 Command:* .delvar
*✨ Description:* Delete heroku config var

*🇱🇰 Command:* .getvar
*✨ Description:* Get heroku config var

*🇱🇰 Command:* .id
*✨ Description:* Giving user's JID.


*🇱🇰 Command:* .notes
*✨ Description:* Shows all your existing notes.

*🇱🇰 Command:* .save
*✨ Description:* Reply a message and type .save or just use .save <Your note> without replying

*🇱🇰 Command:* .deleteNotes
*✨ Description:* Deletes *all* your saved notes.

*🇱🇰 Command:* .kickme
*✨ Description:* It kicks you from the group you are using it in.

*🇱🇰 Command:* .block
*✨ Description:* Block user.

*🇱🇰 Command:* .unblock
*✨ Description:* Unblock user.

*🇱🇰 Command:* .jid
*✨ Description:* Giving user's JID.

*🇱🇰 Command:* .owner
*✨ Description:* Details For Coder

*🇱🇰 Command:* .scam
*✨ Description:* Creates 5 minutes of fake actions.

*🇱🇰 Command:* .configlist

*🇱🇰 Command:* .stophunt
*✨ Description:* High Power Full SPAM.... Turn off command

*🇱🇰 Command:* .darkmod

*🇱🇰 Command:* .killspam
*✨ Description:* Stops spam command.

*🇱🇰 Command:* .spam
*✨ Description:* It spam until you stop it.
⌨️ Example: .spam test

*🇱🇰 Command:* .tag
*✨ Description:* Tags everyone in the group.

*🇱🇰 Command:* .update
*✨ Description:* Checks the update.

*🇱🇰 Command:* .update now
*✨ Description:* It makes updates.

*🇱🇰 Command:* .ping
*✨ Description:* Measures your ping.

  
  `);
    }));
}
if (Config.LANG == 'SI') {
Asena.addCommand({pattern: 'admin$', fromMe: true, delowndinukacmd: false, desc: 'ඇඩ්මින් කමාන්ඩ් ලබා දේ'}, (async (message, match) => {
        
            await message.sendMessage(`*✨✨♔♕ඇඩ්මින් කමාන්ඩ්♕♔✨✨*


*******************************************

*සියලු කමාන්ඩ් ලබා ගැනීමට👇👇👇⋆｡˚ ⁀➷★✼☆｡* 


*🇱🇰 කමාන්ඩ්:* .configvar
*✨ විස්තර:* බොට්ව සෑදීමේදී ඔබ ඇතුලත් කල දත්ත වෙනස් කරන ආකාරය බලා ගැනීමට

*🇱🇰 කමාන්ඩ්:* .configlist
*✨ විස්තර:* බොට්ව සෑදීමෙදී ඔබ ඇතුලත් කල දත්ත

*🇱🇰 කමාන්ඩ්:* .clear
*✨ විස්තර:* චැට් ක්ලියර් කිරීමට යොදා ගන්න

*🇱🇰 කමාන්ඩ්:* .install
*✨ විස්තර:* ප්ලගීන් ඉන්ස්ටෝල් කිරීමට යොදා ගන්න...

*🇱🇰 කමාන්ඩ්:* .plugin
*✨ විස්තර:* ඔබ ඉන්ස්ටෝල් කල ඇති ප්ලගීන් වෙන්වයි.

*🇱🇰 කමාන්ඩ්:* .remove
*✨ විස්තර:* ප්ලගීන් ඉවත් කල හැක.

*🇱🇰 කමාන්ඩ්:* .ban
*✨ විස්තර:* කෙනෙකු ගෲප් එකෙන් ඉවත් කල හැක.

*🇱🇰 කමාන්ඩ්:* .add
*✨ විස්තර:* කෙනෙකු ගෲප් එකකට ඇතුලත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .promote
*✨ විස්තර:* කෙනෙකුට ඇඩ්මින් ලබා දීම සදහා යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .demote
*✨ විස්තර:* කෙනෙකුගෙන් ඇඩ්මින් ඉවත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .mute
*✨ විස්තර:* ගෲප් එක මියුට් කල හැක.

*🇱🇰 කමාන්ඩ්:* .unmute
*✨ විස්තර:* ගෲප් එක unmute කරයි.

*🇱🇰 කමාන්ඩ්:* .invite
*✨ විස්තර:* ගෲප් එකක ඉන්වයිට් ලින්ක් එක ලබා ගත හැක.

*🇱🇰 කමාන්ඩ්:* .name
*✨ විස්තර:* ගෲප් එකක නාමය වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .afk
*✨ විස්තර:* බොට්ව afk ලෙස තබයි

*🇱🇰 කමාන්ඩ්:* .antispam
*✨ විස්තර:* හදිසි අවස්තාවකදී ගෲප් එකට කෙනෙක් දැමූ ස්පෑම් ඉහලට යවයි

*🇱🇰 කමාන්ඩ්:* .filter
*✨ විස්තර:* ඔබගේ ෆිල්ටර් ලිස්ට් එක පෙන්වයි.

*🇱🇰 කමාන්ඩ්:* .stop
*✨ විස්තර:* ඔබ කලින් ඇතුලත් කල ෆිල්ටර් ඉවත් කල හැක.

*🇱🇰 කමාන්ඩ්:* .welcome
*✨ විස්තර:* කෙනෙකු ගෲප් එකට ඇතුලත් වන විට යොදන මැසේජ් එකනැතුලත් කරන්න.. # මගින් රූල් වෙන් කල හැක.

*🇱🇰 කමාන්ඩ්:* .goodbye
*✨ විස්තර:* කෙනෙකු ගෲප් එකෙන් ඉවත් වන විට යොදන මැසේජ් එකනැතුලත් කරන්න.. # මගින් රූල් වෙන් කල හැක.

*🇱🇰 කමාන්ඩ්:* .degis

*🇱🇰 කමාන්ඩ්:* .restart
*✨ විස්තර:* සෙව් බොට්ව නැවත පන ගැන්විය හැක

*🇱🇰 කමාන්ඩ්:* .shutdown
*✨ විස්තර:* සෙව් බොට්ව ක්‍රියාවිරහිත කල හැක

*🇱🇰 කමාන්ඩ්:* .dyno
*✨ විස්තර:* ඔබගේ ඩයිනො ප්‍රමාණය පෙන්වයි

*🇱🇰 කමාන්ඩ්:* .setvar
*✨ විස්තර:* හෙරූකු කොන්ෆිග් වා(ර්) වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .delvar
*✨ විස්තර:* හෙරූකු කොන්ෆිග් වා(ර්) ඩිලිට් කල හැක

*🇱🇰 කමාන්ඩ්:* .getvar
*✨ විස්තර:* හෙරූකු කොන්ෆිග් වාර් ලබා ගත හැක

*🇱🇰 කමාන්ඩ්:* .id
*✨ විස්තර:* id එක ලබා දෙයි.


*🇱🇰 කමාන්ඩ්:* .notes
*✨ විස්තර:* ඔබ සේව් කල නෝට්ස් පෙන්වයි.

*🇱🇰 කමාන්ඩ්:* .save
*✨ විස්තර:* අවශ්‍ය නෝට් එකක් සේව් කිරීම සදහා රිප්ලයි එකක් ලෙස යොදන්න

*🇱🇰 කමාන්ඩ්:* .deleteNotes
*✨ විස්තර:* ඔබගේ සියලු නෝට්ස් ඩිලිට් කරයි.

*🇱🇰 කමාන්ඩ්:* .kickme
*✨ විස්තර:* ගෲප් එකකින් ඉවත් වීමට භාවිතා කරන්න.

*🇱🇰 කමාන්ඩ්:* .pp
*✨ විස්තර:* රිප්ලයි කල පින්තූරය ඔබේ ප්‍රොෆයිල් පින්තූරය බවට පත් කරයි.

*🇱🇰 කමාන්ඩ්:* .block
*✨ විස්තර:* බ්ලොක් කරයි.

*🇱🇰 කමාන්ඩ්:* .unblock
*✨ විස්තර:* අන්බ්ලොක් කරයි.

*🇱🇰 කමාන්ඩ්:* .jid
*✨ විස්තර:* jid ඇඩ්‍රස් එක ලබා දෙයි.

*🇱🇰 කමාන්ඩ්:* .owner
*✨ විස්තර:* බොට්ව සෑදූ පුද්ගලයා පිලිබද විස්තර

*🇱🇰 කමාන්ඩ්:* .scam
*✨ විස්තර:* විනාඩි 5ක් දක්වා ව්‍යාජ ක්‍රියාකාරකම් පෙන්වයි.

*🇱🇰 කමාන්ඩ්:* .configlist

*🇱🇰 කමාන්ඩ්:* .darkmod

*🇱🇰 කමාන්ඩ්:* .killspam
*✨ විස්තර:* ස්පෑම් නැවතිය හැක.

*🇱🇰 කමාන්ඩ්:* .spam
*✨ විස්තර:* ඔබ නවතන තුරු වචනයක් ස්පෑම් කරයි.
⌨️ Example: .spam test

*🇱🇰 කමාන්ඩ්:* .tagall
*✨ විස්තර:* ගෲප් එකේ සිටින අය ටැග් කිරීමට භාවිත කරන්න.

*🇱🇰 කමාන්ඩ්:* .update
*✨ විස්තර:* අප්ඩේට් තිබේදැයි චෙක් කිරීමට භාවිත කරන්න.

*🇱🇰 කමාන්ඩ්:* .update now
*✨ විස්තර:* බොට්ව අප්ඩේට් කිරීමට භාවිත කරන්න.

*🇱🇰 කමාන්ඩ්:* .ping
*✨ විස්තර:* ඔබගේ පින් එක මනිනු ලබයි.
  `);
    }));
