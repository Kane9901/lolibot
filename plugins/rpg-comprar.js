//Pico
const Pickaxe1 = 35000 //Madera
const Pickaxe2 = 45000 //Piedra
const Pickaxe3 = 65000 //Hierro
const Pickaxe4 = 75000 //Oro
const Pickaxe5 = 95000 //Diamante

//Hacha
const Axe1 = 20000 //Madera
const Axe2 = 30000 //Piedra
const Axe3 = 50000 //Hierro
const Axe4 = 60000 //Oro
const Axe5 = 80000 //Diamante

//Caña
const Rod1 = 50000 //Normal


let { MessageType, MentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]

let _pickaxe = global.DATABASE._data.users[m.sender].pickaxe
let pickaxe = (_pickaxe == 0 ? Pickaxe1 : '' || _pickaxe == 1 ? Pickaxe2 : '' || _pickaxe == 2 ? Pickaxe3 : '' || _pickaxe == 3 ? Pickaxe4 : '' || _pickaxe == 4 ? Pickaxe5 : '')
let cpickaxe = (_pickaxe == 0 ? 'madera' : '' || _pickaxe == 1 ? 'piedra' : '' || _pickaxe == 2 ? 'hierro' : '' || _pickaxe == 3 ? 'oro' : '' || _pickaxe == 4 ? 'diamante' : '')
let pickaxedurability = (_pickaxe == 0 ? 500 : '' || _pickaxe == 1 ? 1000 : '' || _pickaxe == 2 ? 1500 : '' || _pickaxe == 3 ? 2000 : '' || _pickaxe == 4 ? 2500 : '')

let _axe = global.DATABASE._data.users[m.sender].axe
let axe = (_axe == 0 ? Axe1 : '' || _axe == 1 ? Axe2 : '' || _axe == 2 ? Axe3 : '' || _axe == 3 ? Axe4 : '' || _axe == 4 ? Axe5 : '')
let caxe = (_axe == 0 ? 'madera' : '' || _axe == 1 ? 'piedra' : '' || _axe == 2 ? 'hierro' : '' || _axe == 3 ? 'oro' : '' || _axe == 4 ? 'diamante' : '')
let axedurability = (_pickaxe == 0 ? 500 : '' || _pickaxe == 1 ? 1000 : '' || _pickaxe == 2 ? 1500 : '' || _pickaxe == 3 ? 2000 : '' || _pickaxe == 4 ? 2500 : '')

let _rod = global.DATABASE._data.users[m.sender].rod
let rod = (_rod == 0 ? Rod1 : '')
let crod = (_rod == 0 ? 'normal' : '')

let imgshop = fs.readFileSync('./storage/image/shop.png')

let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (global.DATABASE._data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Tu pico esta al nivel máximo!', m)
      if (global.DATABASE._data.users[m.sender].money > pickaxe * 1) {
      	 global.DATABASE._data.users[m.sender].pickaxe += 1
           global.DATABASE._data.users[m.sender].pickaxedurability += pickaxedurability * 1
           global.DATABASE._data.users[m.sender].money -= pickaxe * 1
           conn.reply(m.chat, `Compraste un pico de *${cpickaxe}* por ${pickaxe} de dinero` ,m)
          } else conn.reply(m.chat, `No tienes suficiente dinero para comprar el pico de *${cpickaxe}* que cuesta ${pickaxe} de dinero`, m)
      break

case 'hacha':
      if (global.DATABASE._data.users[m.sender].axe == 5) return conn.reply(m.chat, 'Tu hacha esta al nivel máximo', m)
      if (global.DATABASE._data.users[m.sender].money > axe * 1) {
       	global.DATABASE._data.users[m.sender].axe += 1
           global.DATABASE._data.users[m.sender].axedurability += axedurability * 1
           global.DATABASE._data.users[m.sender].money -= axe * 1
           conn.reply(m.chat, 'Compraste una hacha de ' + caxe + ' por ' + axe + ' de dinero' ,m)
          } else conn.reply(m.chat, 'Tu dinero no es suficiente para comprar una hacha que cuesta ' + axe + ' de dinero', m)
      break

case 'caña':
      if (global.DATABASE._data.users[m.sender].rod == 1) return conn.reply(m.chat, 'Tu caña de pescar esta al nivel máximo', m)
      if (global.DATABASE._data.users[m.sender].money > rod * 1) {
       	global.DATABASE._data.users[m.sender].rod += 1
           global.DATABASE._data.users[m.sender].roddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
           global.DATABASE._data.users[m.sender].money -= rod * 1
           conn.reply(m.chat, 'Compraste una caña por ' + rod + ' de dinero' ,m)
           } else conn.reply(m.chat, 'Tu dinero no es suficiente para comprar una caña que cuesta ' + rod + ' de dinero', m)
      break

    default:
return m.reply(`El item *${args[0]}* no esta en la tienda!`)
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

module.exports = handler
