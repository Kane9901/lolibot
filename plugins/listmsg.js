//let handler = m => {
let handler = async (m, { conn, command, usedPrefix, text }) => {
    let msgs = global.DATABASE._data.msgs
    let totalmsg = Object.keys(msgs).length
    let msga = Object.entries(global.DATABASE._data.msgs).filter(ms => ms[1].mtype)
    m.reply(`\t\t\t*‧ 📂 Almɑcenɑmiento 📂 ‧*

*Totɑl:* ${totalmsg} mensajes

*• Stickers:*
${msga ? '' + msga.map(([msgt], i) => `- ${msgt.mtype == 'image/webp' ? '```Error```' : false }`).join('\n\n') : ''}

Escriba *${usedPrefix}getmsg < mensaje >* para
enviar un archivo del almacenamiento`)
}

//${Object.keys(msgs).map(v => '- ' + v).join('\n')}

handler.help = ['listmsg']
handler.tags = ['database']
handler.command = /^list|lista(msg|mensaje)$/

module.exports = handler
