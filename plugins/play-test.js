let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `*Ingrese en nombre de una música*\n\n- Ejemplo: ${usedPrefix + command} It's Been So long`
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${text}&apikey=MIMINGANZ`)
let json = await res.json()
await m.reply(`${JSON.stringify(json, null, 1)}`)
//conn.sendFile(m.chat, json.result.audio, `${json.result.title}.mp3`, m, { mimetype: 'audio/mp4'})
conn.sendFile(m.chat, json.result.audio, 'error.mp3', '', m)
//conn.sendFile(m.chat, json.result.audio, json.title + '.mp3', m, null, {})
}

//handler.help = ['play']
//handler.tags = ['download']
handler.command = /^(xxxplay)$/i

module.exports = handler
