import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let tags = {
'main': '𝐈 𝐍 𝐅 𝐎',
'buscador': '𝐁 𝐔 𝐒 𝐐 𝐔 𝐄 𝐃 𝐀 𝐒',
'fun': '𝐉 𝐔 𝐄 𝐆 𝐎 𝐒',
//'gacha': '𝐆 𝐀 𝐂 𝐇 𝐀',
'serbot': '𝐉 𝐀 𝐃 𝐈 𝐁 𝐎 𝐓 𝐒',
'rpg': '𝐑 𝐏 𝐆',
'rg': '𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎',
'xp': '𝐄 𝐗 𝐏',
'sticker': '𝐒 𝐓 𝐈 𝐂 𝐊 𝐄 𝐑 𝐒',
'anime': '𝐀 𝐍 𝐈 𝐌 𝐄 𝐒',
'database': '𝐃 𝐀 𝐓 𝐀 𝐁 𝐀 𝐒 𝐄',
'fix': '𝐅 𝐈 𝐗 𝐌 𝐒 𝐆 𝐄 𝐒 𝐏 𝐄 𝐑 𝐀',
'grupo': '𝐆 𝐑 𝐔 𝐏 𝐎 𝐒',
'nable': '𝐎 𝐍 / 𝐎 𝐅 𝐅', 
'descargas': '𝐃 𝐄 𝐒 𝐂 𝐀 𝐑 𝐆 𝐀 𝐒',
'tools': '𝐇 𝐄 𝐑 𝐑 𝐀 𝐌 𝐈 𝐄 𝐍 𝐓 𝐀 𝐒',
'info': '𝐈 𝐍 𝐅 𝐎 𝐑 𝐌 𝐀 𝐂 𝐈 𝐎 𝐍',
'nsfw': '𝐍 𝐒 𝐅 𝐖', 
'owner': '𝐎 𝐖 𝐍 𝐄 𝐑', 
'audio': '𝐀 𝐔 𝐃 𝐈 𝐎 𝐒', 
'ai': '𝐀 𝐈',
'transformador': '𝐂 𝐎 𝐍 𝐕 𝐄 𝐑 𝐓 𝐈 𝐃 𝐎 𝐑 𝐄 𝐒',
}

const defaultMenu = {
  before: `*˚₊·˚₊· ͟͟͞͞➳❥ %taguser*
*˚₊·˚₊· ͟͟͞͞➳❥* 𝙏𝙖𝙣𝙟𝙞𝙧𝙤𝘽𝙤𝙩-𝙈𝘿✨

╔═══════⩽✰⩾═══════╗
║	𝐈 𝐍 𝐅 𝐎 - 𝐔 𝐒 𝐄 𝐑
╚═══════⩽✰⩾═══════╝ 
*˚ ͟͟͞͞➳❥ Cliente » %name
*˚ ͟͟͞͞➳❥ Exp » %exp
*˚ ͟͟͞͞➳❥ Pais » %pais
*˚ ͟͟͞͞➳❥ Nivel » %level
*˚ ͟͟͞͞➳❥ Rango » %role

╔═══════⩽✰⩾═══════╗
║	𝐈 𝐍 𝐅 𝐎 - 𝐁 𝐎 𝐓
╚═══════⩽✰⩾═══════╝ 
*˚ ͟͟͞͞➳❥ Made by » 𝐒𝐞𝐛𝐚𝐬-𝐌𝐃
*˚ ͟͟͞͞➳❥ Bot » %botofc
*˚ ͟͟͞͞➳❥ Fecha » %fecha
*˚ ͟͟͞͞➳❥ Actividad » %muptime
*˚ ͟͟͞͞➳❥ Usuarios » %totalreg
`.trimStart(),
    header: '╔═══════⩽✰⩾═══════╗\n║			%category\n╠═══════⩽✰⩾═══════╝\n║╭──────────────┄',
  body: '║│⋆⃟ۣۜ᭪➣%cmd',
  footer: '║╰──────────────┄\n╚═══════⩽✰⩾═══════╝\n',
  after: `> ${dev}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, cookies, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let num = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let api = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')}`)
     let userNationalityData = api.data.result
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        cookies: plugin.cookies,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot'), 
pais: userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido',
fecha: moment.tz('America/Bogota').format('DD/MM/YY'), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, cookies, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

let category = "video"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const rlink = db_.links[category][random]
global.vid = rlink
const response = await fetch(vid)
const gif = await response.buffer()

//await conn.reply(m.chat, '*Próximamente se remitirá el menú.*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: dev, sourceUrl: redeshost, thumbnail: await (await fetch(fotoperfil)).buffer() }}})

await m.react('🥷🏻') 

await conn.sendMessage(m.chat, { video: { url: vid }, caption: text.trim(), contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363299030870235@newsletter', newsletterName: '𝙏𝙖𝙣𝙟𝙞𝙧𝙤𝘽𝙤𝙩-𝙈𝘿 - ᥴһᥲᥒᥒᥱᥣ 🌱', serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: '𝙏𝙖𝙣𝙟𝙞𝙧𝙤𝘽𝙤𝙩-𝙈𝘿✨', body: dev, thumbnailUrl: 'https://pomf2.lain.la/f/f268b93b.mp4', sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: fkontak })

  } catch (e) {
    await m.react(error)
    conn.reply(m.chat, `「✘」 *Ocurrió un error al enviar el menú*\n\n${e}`, m, fake, )
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menuall', 'menu', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;
