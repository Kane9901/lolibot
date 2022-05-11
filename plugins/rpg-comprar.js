const Uppickaxe = 4000
const Uprod = 1000
const Upaxe = 2000
const Upsword = 3000
const Uparmor = 5000

let handler = async (m, { conn, usedPrefix, command, args }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (global.DATABASE._data.users[m.sender].pickaxe > 0) {
      if (global.DATABASE._data.users[m.sender].pickaxedurability >= 5000) return conn.reply(m.chat, 'Tu pico tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Uppickaxe * 1) {
      	global.DATABASE._data.users[m.sender].pickaxedurability += 500
          global.DATABASE._data.users[m.sender].money -= Uppickaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu pico* por ${Uppickaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu pico que cuesta ${Uppickaxe} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes un pico, compralo escribiendo ${usedPrefix}comprar pico`, m)
      break

case 'caña':
      if (global.DATABASE._data.users[m.sender].rod > 0) { 
      if (global.DATABASE._data.users[m.sender].roddurability >= 5000) return conn.reply(m.chat, 'Tu caña tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Uprod * 1) {
      	global.DATABASE._data.users[m.sender].roddurability += 500
          global.DATABASE._data.users[m.sender].money -= Uprod * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu caña* por ${Uprod} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu caña que cuesta ${Uprod} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una caña, compralo escribiendo ${usedPrefix}comprar caña`, m)
      break

case 'hacha':
      if (global.DATABASE._data.users[m.sender].axe > 0) { 
      if (global.DATABASE._data.users[m.sender].axedurability >= 5000) return conn.reply(m.chat, 'Tu hacha tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Upaxe * 1) {
      	global.DATABASE._data.users[m.sender].axedurability += 500
          global.DATABASE._data.users[m.sender].money -= Upaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu hacha* por ${Upaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu hacha que cuesta ${Upaxe} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una hacha, compralo escribiendo ${usedPrefix}comprar hacha`, m)
      break

case 'espada':
      if (global.DATABASE._data.users[m.sender].sword > 0) { 
      if (global.DATABASE._data.users[m.sender].sworddurability >= 5000) return conn.reply(m.chat, 'Tu espada tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Upsword * 1) {
      	global.DATABASE._data.users[m.sender].sworddurability += 500
          global.DATABASE._data.users[m.sender].money -= Upsword * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu espada* por ${Upsword} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu espada que cuesta ${Upsword} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una espada, compralo escribiendo ${usedPrefix}comprar espada`, m)
      break
      
case 'armadura':
      if (global.DATABASE._data.users[m.sender].armor > 0) { 
      if (global.DATABASE._data.users[m.sender].armordurability >= 5000) return conn.reply(m.chat, 'Tu armadura tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Uparmor * 1) {
      	global.DATABASE._data.users[m.sender].armordurability += 500
          global.DATABASE._data.users[m.sender].money -= Uparmor * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu armadura* por ${Uparmor} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu armadura que cuesta ${Uparmor} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una armadura, compralo escribiendo ${usedPrefix}comprar armadura`, m)
      break

    default:
return m.reply(`La herramienta *${args[0]}* no esta para reparar!`)
  }
}

handler.help = ['reparar']
handler.tags = ['rpg']
handler.command = /^(reparar)$/i

module.exports = handler
