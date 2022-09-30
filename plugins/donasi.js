let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
import fs from 'fs';

let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');

    let img2 = `https://i.ibb.co/xgbYTjP/IMG-20220926-143151.jpg`

    return conn.sendButton(m.chat, 'Scan QR Di atas\n❏ Donasi minimal 500p :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {

        contextInfo: {

            externalAdReply: {

                mediaUrl: "https://instagram.com/k0nc1t.store",

                mediaType: "VIDEO",

                title: 'Donasi To KoncitOfc',

                body: bottime,

                previewType: 0,

                thumbnail: img

            }

        }

    })

}

handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i

export default handler
