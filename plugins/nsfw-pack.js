let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let ra = Math.floor(Math.random() * 74)
let pack = fs.readFileSync(`./storage/image/pack/gawr_gura/0${ra}.jpg`)
conn.sendFile(m.chat, pack, 'pack', '*PACK*', m)
}

handler.help = ['pack']
handler.tags = ['nsfw']
handler.command = /^(pack)$/i

module.exports = handler
