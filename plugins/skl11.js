/* Copyright (C) 2021 isuwabrooo.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const LizaMwol = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


LizaMwol.addCommand({pattern: 'KING', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '.𝙃𝙀𝙇𝙋 𝘾𝙊𝙈𝙈𝘼𝙉𝘿', description: "\n\n╭────────────────╮\n      ✰✴𝙆𝙄𝙉𝙂 ❤ 𝙄𝙎𝙐𝙒𝘼✴✰ \n ╰────────────────╯\n 🇱🇰 𝐆𝐑𝐎𝐔𝐏 𝐊𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n ╭──────────────── \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀᴅᴅ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʙᴀɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴍᴜᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴜɴᴍᴜᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴘʀᴏᴍᴏᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴅᴇᴍᴏᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɪɴᴠɪᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴊᴏɪɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡᴇʟᴄᴏᴍᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɢᴏᴏᴅʙʏᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴋɪᴄᴋᴍᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴛᴀɢᴀʟʟ \n╰──────────────── \n 🇱🇰 𝐎𝐖𝐍𝐄𝐑 𝐂𝐔𝐌𝐌𝐄𝐍𝐃𝐒 \n ╭──────────────── \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌 ʙɢᴍ ᴏɴ/ᴏғғ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌 ᴛʜᴇʀɪ ᴏɴ/ᴏғғ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌 ʙᴀɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌 ᴛᴀɢᴀᴅᴍɪɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ ᴏɴ/ᴏғғ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡᴀʀɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʙᴏᴛɴᴀᴍᴇ \n ╰──────────────── \n 🇱🇰 𝐃𝐎𝐖𝐍𝐋𝐎𝐃 𝐊𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n ╭──────────────── \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sᴏɴɢ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sɪɴɢ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʟʏʀɪᴄ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴠɪᴅᴇᴏ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɪɴsᴛᴀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɪᴍɢ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ss \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴋɪɴɢ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡɪᴋɪ \n ╰──────────────── \n 🇱🇰 𝐌𝐈𝐒𝐂 𝐊𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɢɪᴛ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴏᴡɴᴇʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴏᴡɴᴇʀᴄᴍɴᴅ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀʟɪᴠᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  xᴍᴇᴅɪᴀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɢɪᴛʜᴜʙ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sᴄᴀɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʀᴅᴍᴏʀᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɴᴇᴡs \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴇᴍᴏ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ғғɪʀᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀɴɪᴍᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʀᴇɴᴀᴍᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴍᴘ3 \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴍᴘ4 \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sᴛɪᴄᴋᴇʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴘʜᴏᴛᴏ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴛᴛs \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴜɴᴠᴏɪᴄᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʀᴇᴍᴏᴠᴇʙɢ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀᴛᴛᴘ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴛʀᴛ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴄᴀʟᴄ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴊᴏᴋᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴍᴏʟᴜ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɪɴsᴜʟᴛ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡᴀᴍᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴘʟᴜɢɪɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʀᴇᴍᴏᴠᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ғɪʟᴛᴇʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴊɪᴅ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʙʟᴏᴄᴋ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴜɴʙʟᴏᴄᴋ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sʜᴏʀᴛ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡʜᴏɪs \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴡᴀʟʟᴘᴀᴘᴇʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sʜᴏᴡ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴍᴏᴠɪᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴄᴏᴠɪᴅ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴘɪɴɢ \n ╰──────────────── \n 🇱🇰 𝐇𝐄𝐑𝐎𝐊𝐔 𝐊𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n ╭──────────────── \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ʀᴇsᴛᴀʀᴛ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sʜᴜᴛᴅᴏᴡɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sᴇᴛᴠᴀʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ɢᴇᴛᴠᴀʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴀʟʟᴠᴀʀ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  sᴜᴅᴏ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴜᴘᴅᴀᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n ╰──────────────── \n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣", rowId:" rowid1"},
        {title: '.𝙓𝙈𝙀𝘿𝙄𝘼 𝘾𝙊𝙈𝙈𝘼𝙉𝘿', description: "XMEDIA COMMANDS ARE.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n✴✺Usage: *.mp4enhance*\n💠️Desc:Enhance video’s quality.\n\n✴✺Usage: *.interp*\n💠️Desc:Increases the FPS of the video.\n\n✴✺Usage: *.mp4slowmo*\n💠️Desc:Applies true-slowmo to non-slow motion videos.\n\n✴✺Usage: *.x4mp4*\n💠️Desc:Reduce video’s quality by 75%.\n\n✴✺Usage: *.x2mp4*\n💠️Desc: Reduce video’s quality by 50%.\n\n✴✺Usage: *.gif*\n💠️Desc:Converts video to gif.\n\n✴✺Usage: *.agif*\n💠️Desc:Converts video to voiced gif.\n\n✴✺Usage: *.mp4blur*\n💠️Desc: Blurs the background of the video.\n\n✴✺Usage: *.mp4stab*\n💠️Desc: Decreases the vibration of the video.\n\n✴✺Usage: *.mp4rainbow*\n💠️Desc: Applies a rainbow effect to video.\n\n✴✺Usage: *.mp4color*\n💠️Desc:Makes the colors of the video more vivid and beautiful.\n\n✴✺Usage: *.mp4art*\n💠️Desc:Applies a art effect to the video.\n\n✴✺Usage: *.mp4negative*\n💠️Desc:Applies a negative color filter to the video.\n\n✴✺Usage: *.mp4vintage*\n💠️Desc:Applies a nostalgic effect to video.\n\n✴✺Usage: *.mp4bw*\n💠️Desc: Applies a monochrome effect to video.\n\n✴✺Usage: *.mp4reverse*\n💠️Desc: Plays the video in reverse.\n\n✴✺Usage: *.mp4edge*\n💠️Desc:Applies a edge effect to the video.\n\n✴✺Usage: *.mp4image*\n💠️Desc: Converts photo to 5 sec video.\n\n✴✺Usage: *.spectrum*\n💠️Desc: Converts the spectrum of sound into video.\n\n✴✺Usage: *.waves*\n💠️Desc: Converts the wave range of sound to video.\n\n✴✺Usage: *.frequency*\n💠️Desc: Converts the frequency range of sound to video.\n\n✴✺Usage: *.avec*\n💠️Desc: Converts the histogram of sound to video.\n\n✴✺Usage: *.volumeaudio*\n💠️Desc: Converts the decibel value of the sound into video.\n\n✴✺Usage: *.cqtaudio*\n💠️Desc: Converts the CQT value of audio to video.\n\n✴✺Usage: *.mp3eq*\n💠️Desc: Adjusts the sound to a crystal clear level.\n\n✴✺Usage: *.mp3crusher*\n💠️Desc:Distorts the sound, makes ridiculous.\n\n✴✺Usage: *.mp3reverse*\n💠️Desc:Plays the sound in reverse.\n\n✴✺Usage: *.mp3pitch*\n💠️Desc:Makes the sound thinner and faster.\n\n✴✺Usage *.mp3low*\n💠️Desc:Makes the sound deep and slower.\n\n✴✺Usage: *.x2mp3*\n💠️Desc:  Makes the sound twice as fast.\n\n✴✺Usage: *.mp3volume*\n💠️Desc: ♠ Ses seviyesini fazalca arttırır.\n🇱🇰 Increase sound level so much.\n\n✴✺Usage: *.bwimage*\n💠️Desc: ♠ Fotoğrafa monochrome efekti uygular.\n🇱🇰 Applies a monochrome effect to image.\n\n✴✺Usage: *.vintageimage*\n💠️Desc: ♠ Fotoğrafa vintage efekti uygular.\n🇱🇰 Applies a vinatge effect to video.\n\n✴✺Usage: *.edgeimage*\n💠️Desc: ♠ Fotoğrafa edge efekti uygular.\n🇱🇰 Applies a edge effect to the photo.\n\n✴✺Usage: *.enhanceimage*\n💠️Desc: ♠ Fotoğrafı daha net hale getirir.\n🇱🇰 Makes the photo clearer.\n\n✴✺Usage: *.blurimage*\n💠️Desc: ♠ Fotoğrafın arka planını bulanıklaştırır.\n🇱🇰 Blurs the background of the photo.\n\n✴✺Usage: *.grenimage*\n💠️Desc: ♠ Fotoğrafa gren efekti uygular.\n🇱🇰 Applies grain effect to the photo.\n\n✴✺Usage: *.negativeimage*\n💠️Desc: ♠ Fotoğrafa negatif renk filtresi uygular.\n🇱🇰 Applies a negative color filter to the photo.\n\n✴✺Usage: *.rainbowimage*\n💠️Desc: ♠ Fotoğrafa gökkuşağı efekti uygular.\n🇱🇰 Applies rainbow effect to the photo.\n\n✴✺Usage: *.colorimage*\n💠️Desc: ♠ Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n✴✺Usage: *.artimage*\n💠️Desc: ♠ Fotoğrafa çizim efekti uygular.\n🇱🇰 Applies a art effect to the photo\n\n\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ ", rowId:" rowid2"},
        {title: '.𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿', description: "\n\n\n```නිර්මාණකරු නිතින් සහ ෆයාස්```\n\n```⚡✅owner number wa.me/94776312185```\n\n```⚡✅owner number wa.me/94783800632```\n\n\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ ", rowId:" rowid3"},
        {title: '.GIT', description: "\n\n\n```නිර්මාණකරු නිතින් සහ ෆයාස්```\n\n```🔱 owner number wa.me/94776312185```\n\n```🔱 owner number wa.me/94783800632```\n\n```🔱 whatsapp group : https://chat.whatsapp.com/BRPbS6JHUoCE4MpLLM5z```\n\n```🔱 githublink       https://github.com/isuwabrooo/queen-angella```\n\n```🔱audio commads    https://github.com/isuwabrooo/media/tree/main/uploads```\n\n```🔱 sticker commads  https://github.com/isuwabrooo/media/tree/main/stickers```\n\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣  ", rowId:" rowid4"},
        {title: '.𝘼𝘿𝙈𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿', description: "\n\n╭────────────────╮\n         ✰✴𝙆𝙄𝙉𝙂 ❤ 𝙄𝙎𝙐𝙒𝘼✴✰ \n ╰────────────────╯\n 🇱🇰 𝐀𝐃𝐌𝐈𝐍 𝐊𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n ╭──────────────── \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ɪɴꜱᴛᴀʟʟ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴘʟᴜɢɪɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ʀᴇᴍᴏᴠᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ʙᴀɴ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴀᴅᴅ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴘʀᴏᴍᴏᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴅᴇᴍᴏᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴍᴜᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴜɴᴍᴜᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ɪɴᴠɪᴛᴇ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴀꜰᴋ \n │ ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴅᴇʟ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴊᴜꜱᴛꜱᴘᴀᴍ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴡᴇʟᴄᴏᴍᴇ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ɢᴏᴏᴅʙʏᴇ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴋɪɴɢ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴅᴇɢɪꜱ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ʀᴇꜱᴛᴀʀᴛ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ꜱʜᴜʀᴅᴏᴡɴ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴅʏɴᴏ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ꜱᴇᴛᴠᴀʀ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ᴅᴇʟᴠᴀʀ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ɢᴇᴛᴠᴀʀ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌  .ʟᴇᴀᴠᴇ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴘᴘ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ʙʟᴏᴄᴋ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴜɴʙʟᴏᴄᴋ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴊɪᴅ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ꜱᴄᴀᴍ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ꜱᴘᴀᴍ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ꜰɪʟᴛʀᴇ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴛᴀɢᴀʟʟ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴛᴀɢᴀᴅᴍɪɴ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ꜱᴛᴀᴍ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴜᴘᴅᴀᴛᴇ \n ▕  ❤️⃟✦⃝̮̮̮̯̯̯😌 .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n╰──────────────── \n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣", rowId:" rowid5"},
        {title: '.𝙇𝙊𝙂𝙊 𝘾𝙊𝙈𝙈𝘼𝙉𝘿', description: "\n\n\n\n   *╔═════ೋೋ═════╗*   \n   𝕂𝕀ℕ𝔾 ❃ ℚ𝕌𝔼𝔼ℕ   *╚═══❖•ೋ°°ೋ•❖═══╝*🌹⃝✥⃟☺️᭄ꦿ   \n\n\n\n       𝐊𝐈𝐍𝐆𝐐𝐔𝐄𝐄𝐍😌⃟⌘࿔⃝❤️     \n\n   🌹⃝❤️࿔⃟࿔   \n   🌹⃝❤️࿔⃟࿔   .D̳E̳V̳I̳L̳   \n   🌹⃝❤️࿔⃟࿔   .B̳E̳A̳R̳   \n   🌹⃝❤️࿔⃟࿔   .W̳O̳L̳F̳   \n   🌹⃝❤️࿔⃟࿔   .N̳E̳O̳N̳   \n   🌹⃝❤️࿔⃟࿔   .F̳U̳T̳U̳R̳E̳   \n   🌹⃝❤️࿔⃟࿔   .2N̳E̳O̳N̳   \n   🌹⃝❤️࿔⃟࿔   .3N̳E̳O̳N̳   \n   🌹⃝❤️࿔⃟࿔   .L̳I̳G̳H̳T̳   \n   🌹⃝❤️࿔⃟࿔   .J̳O̳K̳E̳R̳   \n   🌹⃝❤️࿔⃟࿔   .N̳I̳N̳J̳A̳   \n   🌹⃝❤️࿔⃟࿔   .G̳L̳I̳T̳T̳E̳R̳   \n   🌹⃝❤️࿔⃟࿔   .B̳O̳K̳E̳H̳   \n   🌹⃝❤️࿔⃟࿔   .M̳A̳R̳V̳E̳L̳   \n   🌹⃝❤️࿔⃟࿔   .2M̳A̳R̳V̳E̳L̳   \n   🌹⃝❤️࿔⃟࿔   .A̳V̳E̳N̳G̳E̳R̳S̳   \n   🌹⃝❤️࿔⃟࿔   .G̳R̳A̳F̳   \n   🌹⃝❤️࿔⃟࿔   .L̳I̳O̳N̳   \n   🌹⃝❤️࿔⃟࿔   .I̳C̳E̳   \n   🌹⃝❤️࿔⃟࿔   .S̳P̳A̳C̳E̳   \n   🌹⃝❤️࿔⃟࿔   .S̳M̳O̳K̳E̳   \n   🌹⃝❤️࿔⃟࿔   .G̳L̳O̳W̳   \n   🌹⃝❤️࿔⃟࿔   .F̳I̳R̳E̳   \n   🌹⃝❤️࿔⃟࿔   .C̳U̳P̳   \n   🌹⃝❤️࿔⃟࿔   .C̳E̳M̳E̳T̳E̳R̳Y̳   \n   🌹⃝❤️࿔⃟࿔   .G̳L̳I̳T̳C̳H̳   \n   🌹⃝❤️࿔⃟࿔    \n\n      \n      ╔══╗ ♪      \n      ║██║ ♫      \n      ║ ( ● ) ♫      \n      ╚══╝♪ ♪", rowId:" rowid6"}
       ]

       const sections = [{title: "ωнαтsαρρ вσт™", rows: rows}]

       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 🇱🇰❃ 𝗛𝗘𝗥𝗘',
        description: "*~________~ ✴𝙆𝙄𝙉𝙂 ❤ 𝙄𝙎𝙐𝙒𝘼✴࿐ ~______~*\n\n\nසියලුම කමාන්ඩ් මෙහි ඇත\n\n.    ▼￣＞-―-＜￣▼\n 　　Ｙ　            Ｙ\n    /\   / 　 ●    o  ●）\n  ＼  ｜　 つ　    ヽ\n",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
