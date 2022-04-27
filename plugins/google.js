let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let full = /google$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, `*Ingrese un texto que desea buscar*\n\n- Ejemplo: ${usedPrefix + command} Minecraft`, m)
  conn.reply(m.chat, wait, m)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n─────────────────\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
    if (ss.includes('html')) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', '\t\t*‧ [ 🔎 Google Busqueda 🔎 ] ‧*\n\n─────────────────\n\n' + msg, m)
  } catch (e) {
    m.reply(msg)
  }
}
handler.help = ['google']
handler.tags = ['internet']
handler.command = /^(google|googlef)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

