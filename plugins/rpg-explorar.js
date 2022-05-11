let handler = async (m, { conn, usedPrefix }) => {
	
    let __waktur = (new Date - global.DATABASE._data.users[m.sender].lastadventure)
    let _waktur = (900000 - __waktur)
    let waktur = clockString(_waktur)
    
    let user = global.DATABASE._data.users[m.sender]
    
    let armor = global.DATABASE._data.users[m.sender].armor
    let sword = global.DATABASE._data.users[m.sender].sword
    let sdurability = global.DATABASE._data.users[m.sender].sworddurability
    
    let money = (sword == 1 ? (Math.floor(Math.random() * (3500 - 3700) + 3700) + 1) : '' || sword == 2 ? (Math.floor(Math.random() * (5000 - 5200) + 5200) + 1) : '' || sword == 3 ? (Math.floor(Math.random() * (7300 - 7500) + 7500) + 1) : '' || sword == 4 ? (Math.floor(Math.random() * (9500 - 9700) + 9700) + 1) : '' || sword == 5 ? (Math.floor(Math.random() * (10000 - 12000) + 12000) + 1) : '' )
    let seed = (Math.floor(Math.random() * (5 - 10) + 10) + 1)
    let exp = (sword == 1 ? (Math.floor(Math.random() * (100 - 200) + 200) + 1) : '' || sword == 2 ? (Math.floor(Math.random() * (300 - 400) + 400) + 1) : '' || sword == 3 ? (Math.floor(Math.random() * (500 - 600) + 600) + 1) : '' || sword == 4 ? (Math.floor(Math.random() * (700 - 800) + 800) + 1) : '' || sword == 5 ? (Math.floor(Math.random() * (900 - 1000) + 1000) + 1) : '' )
    
    let durability = (Math.floor(Math.random() * (50 - 100) + 100) + 1)
    let healt = (Math.floor(Math.random() * (10 - 15) + 15) + 1)
    let potion = pickRandom(['0', '1', '0', '2', '0', '3', '0', '2', '0', '1', '0'])
    let err = (sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': '')
    let word = pickRandom(['a las tierras perdidas', 'al vale de Kara', 'a Beleriand', 'a la ciudad de fuego', 'a Camorrus', 'al fin del horizonte', 'al grito de cuervo', 'al valle del anochecer'])
    
    let ar = (armor == 0 ? 'No tiene' : '' || armor == 1 ? 'cuero' : '' || armor == 2 ? 'malla' : '' || armor == 3 ? 'hierro' : '' || armor == 4 ? 'oro' : '' || armor == 5 ? 'diamante': '')
    let es = (sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': '')
    
    if (sword > 0) {
    if (global.DATABASE._data.users[m.sender].healt > 15) {
    if (global.DATABASE._data.users[m.sender].sworddurability > 99) {
    if (new Date - global.DATABASE._data.users[m.sender].lastadventure > 180000) {

    global.DATABASE._data.users[m.sender].lastadventure = new Date * 1
    global.DATABASE._data.users[m.sender].healt -= healt * 1
    global.DATABASE._data.users[m.sender].money += money * 1 
    global.DATABASE._data.users[m.sender].potion += potion * 1 
    global.DATABASE._data.users[m.sender].seed += seed * 1
    global.DATABASE._data.users[m.sender].sworddurability -= durability * 1
    global.DATABASE._data.users[m.sender].exp += exp * 1

          setTimeout(() => {
          	m.reply(`*Tu vida se reduce -${healt} porque fuiste a ${word}*

*🗡 Espada de:* ${es}
*👕 Armadura de:* ${ar}

◦ Dinero: $${money}${potion == 0 ? '' : `◦ Poción: ${potion}`}
◦ Semilla: ${seed}
◦ Exp: ${exp}

*Durabilidad total:* -${durability}`)
          }, 0)
          
             } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
          } else m.reply(`Repara tu espada, escribiendo ${usedPrefix}reparar espada`)
       } else m.reply(`Tienes poca vida para ir a explorar, escribe *${usedPrefix}usar pocion* para regenerar tu vida`)
    } else m.reply(`Todavía no tienes una espada, compralo escribiendo *${usedPrefix}comprar espada* o puedes conseguir una gratis abriendo un cofre`)
 }

handler.help = ['explorar']
handler.tags = ['rpg']

handler.command = /^(explorar|adventure|work)$/i
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
