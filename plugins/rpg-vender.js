let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

//Minerales
const Sdiamond = 750
const Sgold = 500
const Siron = 150
const Sstone = 10

//Madera
const Soak = 10

//Peces
const Sblowfish = 500
const Stropicalfish = 300
const Scommonfish = 50

let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let type = (args[0] || ' ').toLowerCase()
let _type = (args[1] || ' ').toLowerCase()

const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
const _count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)

switch (type) {
case 'diamante':
case 'diamantes':
      if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
      	global.DATABASE._data.users[m.sender].diamond -= count * 1
      	global.DATABASE._data.users[m.sender].money += Sdiamond * count
          conn.reply(m.chat, `Vendiste ${count} de diamante por ${Sdiamond * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes diamantes para vender', m)
      break

case 'oro':
      if (global.DATABASE._data.users[m.sender].gold >= count * 1) {
      	global.DATABASE._data.users[m.sender].gold -= count * 1
      	global.DATABASE._data.users[m.sender].money += Sgold * count
          conn.reply(m.chat, `Vendiste ${count} de oro por ${Sgold * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficiente oro, para vender', m)
      break

case 'hierro':
      if (global.DATABASE._data.users[m.sender].iron >= count * 1) {
      	global.DATABASE._data.users[m.sender].iron -= count * 1
      	global.DATABASE._data.users[m.sender].money += Siron * count
          conn.reply(m.chat, `Vendiste ${count} de hierro por ${Siron * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficiente hierro, para vender', m)
      break

case 'piedra':
      if (global.DATABASE._data.users[m.sender].stone >= count * 1) {
      	global.DATABASE._data.users[m.sender].stone -= count * 1
      	global.DATABASE._data.users[m.sender].money += Sstone * count
          conn.reply(m.chat, `Vendiste ${count} de piedra por ${Sstone * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficiente piedra, para vender', m)
      break

case 'madera':
      if (global.DATABASE._data.users[m.sender].oak >= count * 1) {
      	global.DATABASE._data.users[m.sender].oak -= count * 1
      	global.DATABASE._data.users[m.sender].money += Soak * count
          conn.reply(m.chat, `Vendiste ${count} de madera por ${Soak * count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficiente madera, para vender', m)
      break

case 'pez':
case 'peces':
switch (_type) {
case 'tropical':
case 'tropicales':
      if (global.DATABASE._data.users[m.sender].tropicalfish >= _count * 1) {
      	global.DATABASE._data.users[m.sender].tropicalfish -= _count * 1
      	global.DATABASE._data.users[m.sender].money += Stropicalfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces tropical por ${Stropicalfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces tropicales, para vender', m)
      break
      
case 'globo':
case 'globos':
      if (global.DATABASE._data.users[m.sender].blowfish >= _count * 1) {
      	global.DATABASE._data.users[m.sender].blowfish -= _count * 1
      	global.DATABASE._data.users[m.sender].money += Sblowfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces globos por ${Sblowfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces globos, para vender', m)
      break
      
case 'comun':
case 'común':
case 'comunes':
case 'comúnes':
      if (global.DATABASE._data.users[m.sender].commonfish >= _count * 1) {
      	global.DATABASE._data.users[m.sender].commonfish -= _count * 1
      	global.DATABASE._data.users[m.sender].money += Scommonfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces comunes por ${Scommonfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces comunes, para vender', m)
      break
    default:
    return conn.reply(m.chat, `*${text}* no está en la lista!`, m)
      }
      break


    default:
let sell = `
*Que item quieres vender?*

- Ejemplo: ${usedPrefix + command} diamante 7

*Lista de items para vender*
- Diamante
- Oro
- Hierro
- Piedra
- Pez tropical
- Pez comun
- Pez globo
`.trim()
return conn.reply(m.chat, sell, m)
  }
}

handler.help = ['vender']
handler.tags = ['rpg']
handler.command = /^(vender|sell)$/i

module.exports = handler
