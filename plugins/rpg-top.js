let handler = async (m, { conn, args }) => {
  const name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  const sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  const sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  const sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  const sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  const usersExp = sortedExp.map(v => v[0])
  const usersLim = sortedLim.map(v => v[0])
  const usersmoney = sortedmoney.map(v => v[0])
  const userslevel = sortedlevel.map(v => v[0])
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(10, sortedExp.length)

let type = (args[0] || ' ').toLowerCase()

switch (type) {

case 'dinero':
case 'money':
  let text = `\t\t\t*乂 T O P  -  D I N E R O*

*• Posicion:* *${usersmoney.indexOf(m.sender) + 1}* de *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => '*' + (i + 1) + '. @' + user.split`@`[0] + `*\n*💵 Dinero:* ${shortNum(data.money)}`).join`\n╶\n`}
`
  m.reply(text)
break

default:
//Top test
}

}

handler.help = ['lb']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb|top)$/i
handler.fail = null
handler.exp = 0

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
