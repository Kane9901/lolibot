let handler = async (m, { conn }) => {
    let id = m.chat
    let mCount = {}
    let totalM = 0
    await conn.loadAllMessages(id, m => {
        let user = m.key.fromMe ? conn.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
    let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
    let pesan = sorted.map(v => `*• Usuario:* ${v[0].replace(/(\d+)@.+/, '@$1')}\n*• Mensajes:* ${v[1]} total`).join('\n\n')
    m.reply(`*Total:* ${totalM} mensajes\n\n${pesan}`, false, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
}

handler.help = ['totalmsg']
handler.tags = ['group']
handler.command = /^(mensajes|totalmsg)$/i
handler.admin = true 

module.exports = handler
