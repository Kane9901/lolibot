let handler = async (m, { conn, usedPrefix }) => {
	
    let user = global.DATABASE._data.users[m.sender]
    let pickaxe = global.DATABASE._data.users[m.sender].pickaxe
    let pdurability = global.DATABASE._data.users[m.sender].pickaxedurability
    let __waktur = (new Date - global.DATABASE._data.users[m.sender].lastmining)
    let _waktur = (180000 - __waktur)
    let waktur = clockString(_waktur)
    let diamond = (pickaxe == 1 ? (Math.floor(Math.random() * (3 - 5) + 5) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (5 - 7) + 7) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (8 - 10) + 10) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (11 - 13) + 13) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (15 - 17) + 17) + 1) : '' )
    let gold = (pickaxe == 1 ? (Math.floor(Math.random() * (4 - 6) + 6) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (7 - 9) + 9) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (11 - 13) + 13) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (13 - 15) + 15) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (17 - 19) + 19) + 1) : '' )
    let iron = (pickaxe == 1 ? (Math.floor(Math.random() * (8 - 10) + 10) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (13 - 15) + 15) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (18 - 20) + 20) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (28 - 30) + 30) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (48 - 50) + 50) + 1) : '' )
    let stone = (pickaxe == 1 ? (Math.floor(Math.random() * (28 - 30) + 30) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (38 - 40) + 40) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (58 - 60) + 60) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (78 - 80) + 80) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (97 - 100) + 100) + 1) : '' )
    let exp = (pickaxe == 1 ? (Math.floor(Math.random() * (150 - 200) + 200) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (300 - 400) + 400) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (500 - 600) + 600) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (700 - 800) + 800) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (900 - 1000) + 1000) + 1) : '' )
    let durability = (Math.floor(Math.random() * (50 - 100) + 100) + 1)
    let err = (pickaxe == 0 ? 'No tiene' : '' || pickaxe == 1 ? 'madera' : '' || pickaxe == 2 ? 'piedra' : '' || pickaxe == 3 ? 'hierro' : '' || pickaxe == 4 ? 'oro' : '' || pickaxe == 5 ? 'diamante': '')
    let goa = (pickRandom(['una cueva 🏔', 'un volcan 🌋', 'jupiter 🪨', 'saturno 🪐']))
    
    if (pickaxe > 0) {
    if (global.DATABASE._data.users[m.sender].pickaxedurability > 99) {
    if (new Date - global.DATABASE._data.users[m.sender].lastmining > 180000) {
       
global.DATABASE._data.users[m.sender].lastmining = new Date * 1
global.DATABASE._data.users[m.sender].diamond += diamond * 1 
global.DATABASE._data.users[m.sender].gold += gold * 1 
global.DATABASE._data.users[m.sender].iron += iron * 1 
global.DATABASE._data.users[m.sender].stone += stone * 1 
global.DATABASE._data.users[m.sender].pickaxedurability -= durability * 1
global.DATABASE._data.users[m.sender].exp += exp * 1

          setTimeout(() => {
          	m.reply(`*Minaste en ${goa} y obtienes*

*⛏Pico de:* ${err}

◦ Diamante: ${diamond}
◦ Oro: ${gold}
◦ Hierro: ${iron}
◦ Piedra: ${stone}
◦ Exp: ${exp}

*Durabilidad:* -${durability}`)
          }, 0)
          
            } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
         } else m.reply(`Repara tu pico, escribiendo ${usedPrefix}reparar pico`)
     } else m.reply(`Todavía no tienes un pico, compralo escribiendo ${usedPrefix}comprar pico`)
 }

handler.help = ['minar']
handler.tags = ['rpg']

handler.command = /^(mining|minar)$/i
handler.disabled = false

module.exports = handler

function clockString(seconds) {
  d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  m = Math.floor((seconds / (1000 * 60)) % 60);
  s = Math.floor((seconds / 1000) % 60);
  
  dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
} 
