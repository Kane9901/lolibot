let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command }) => {
let tumb = fs.readFileSync('./storage/image/tienda.jpg')
let shop = `\t*• 🪓 Herramientas para Comprar 🎣 •*

*⛏ Minar*
*∙ Pico de madera:*
Costo: $350000

*∙ Pico de piedra:*
Costo: $450000

*∙ Pico de hierro:*
Costo: $650000

*∙ Pico de oro:*
Costo: $750000

*∙ Pico de diamante:*
Costo: $950000

*🪓 Talar*
*∙ Hacha de madera:*
Costo: $200000

*∙ Hacha de piedra:*
Costo: $300000

*∙ Hacha de hierro:*
Costo: $500000

*∙ Hacha de oro:*
Costo: $600000

*∙ Hacha de diamante:*
Costo: $800000

\t\t*• 🔩 Intems para Vender 🐡 •*

*Minerales:*
*∙ Diamante:*    $750
*∙ Oro:*                 $500
*∙ Hierro:*           $150
*∙ Piedra:*           $10

*Peces:*
*∙ Globo:*           $500
*∙ Tropical:*       $300
*∙ Comun:*         $50`
let note = `*Nota:* Al comprar una herramienta se suben de nivel de madera hasta el diamante

*No puedes comprar una herramienta en especifico*`
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.image, { quoted: m, thumbnail: tumb })
gbutsan = [{ buttonId: `${usedPrefix}inv`, buttonText: { displayText: 'Inventario 🎒' }, type: 1 }, { buttonId: `${usedPrefix}energía`, buttonText: { displayText: 'Energía ⚡' }, type: 1 }]
gbuttonan = { imageMessage: menux.message.imageMessage, contentText: shop, footerText: note, buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.command = /^(store|tienda|shop)$/i
handler.group = true

module.exports = handler
