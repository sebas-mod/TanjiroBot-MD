/*import { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } from '@whiskeysockets/baileys'
import qrcode from 'qrcode'
import fs from 'fs'
import pino from 'pino'
import crypto from 'crypto'
import NodeCache from 'node-cache'
import { makeWASocket } from '../lib/simple.js'
if (global.conns instanceof Array) {
console.log()
} else {
global.conns = []
}
let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems, isROwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd && !isROwner) {
conn.reply(m.chat, '🚩 Este Comando está deshabilitado por mi creador.', m, rcanal)
return
}
let parentw = args[0] && args[0] == "plz" ? conn : await global.conn
if (!(args[0] && args[0] == 'plz' || (await global.conn).user.jid == conn.user.jid)) {
return conn.reply(m.chat, `「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m, rcanal)
}
async function serbot() {
let serbotFolder = crypto.randomBytes(10).toString('hex').slice(0, 8)
let folderSub = `./${jadi}/${serbotFolder}`
if (!fs.existsSync(folderSub)) {
fs.mkdirSync(folderSub, { recursive: true })
}
if (args[0]) {
fs.writeFileSync(`${folderSub}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveCreds } = await useMultiFileAuthState(folderSub)
const msgRetryCounterCache = new NodeCache()
const { version } = await fetchLatestBaileysVersion()
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Yaemori Sub-Bot', 'Edge', '2.0.0'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
version
}
let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) {
conn.isInit = true
}
if (qr) {
let txt = '🚩 S E R B O T - S U B B O T 🚩\n\n*Escanea este QR para ser un Sub Bot*\n\n🍟 Pasos para escanear:\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Escanea este QR\n\n> *Nota:* Este código QR expira en 30 segundos.'

let sendQR = await parentw.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), "qrcode.png", txt, m, null, rcanal)
setTimeout(() => {
parentw.sendMessage(m.chat, { delete: sendQR.key })
}, 30000)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn)
if (i < 0) {
return console.log(await creloadHandler(true).catch(console.error))
}
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed) {
await parentw.reply(conn.user.jid, "🚩 Conexión perdida con el servidor.", m)
}
}
if (global.db.data == null) {
loadDatabase()
}
if (connection == "open") {
conn.isInit = true
global.conns.push(conn)
await parentw.reply(m.chat, args[0] ? '🐢 Conectado con éxito al WhatsApp.' : '🚩 Vinculaste un Sub-Bot con éxito.', m, rcanal)
await sleep(5000)
if (args[0]) {
return
}
await parentw.reply(conn.user.jid, `🚩 *Para volver a vincular un sub Bot use su token*`, m, rcanal)
}
}
const timeoutId = setTimeout(() => {
if (!conn.user) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)
if (i >= 0) {
delete global.conns[i]
global.conns.splice(i, 1)
}
fs.rmdirSync(`./${jadi}/${serbotFolder}`, { recursive: true })
}
}, 30000)
let handler = await import("../handler.js")
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) {
handler = Handler
}
} catch (e) {
console.error(e)
}
if (restatConn) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (!isInit) {
conn.ev.off("messages.upsert", conn.handler)
conn.ev.off("connection.update", conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
} 
conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)
conn.ev.on("messages.upsert", conn.handler)
conn.ev.on("connection.update", conn.connectionUpdate)
conn.ev.on("creds.update", conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()
}
handler.help = ["serbot"]
handler.tags = ["serbot"]
handler.command = ["serbot", "jadibot", "qr", "botclone"]
// handler.register = true
export default handler
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}*/

const _0x5cd04f=_0x57b9;(function(_0x24dd37,_0x1618d5){const _0x2d80e5=_0x57b9,_0x28a6b9=_0x24dd37();while(!![]){try{const _0x162444=parseInt(_0x2d80e5(0x14c))/0x1*(parseInt(_0x2d80e5(0x164))/0x2)+parseInt(_0x2d80e5(0x153))/0x3*(-parseInt(_0x2d80e5(0x144))/0x4)+parseInt(_0x2d80e5(0x141))/0x5+-parseInt(_0x2d80e5(0x14d))/0x6*(-parseInt(_0x2d80e5(0x167))/0x7)+-parseInt(_0x2d80e5(0x19b))/0x8*(-parseInt(_0x2d80e5(0x158))/0x9)+parseInt(_0x2d80e5(0x18f))/0xa+-parseInt(_0x2d80e5(0x140))/0xb;if(_0x162444===_0x1618d5)break;else _0x28a6b9['push'](_0x28a6b9['shift']());}catch(_0x4df915){_0x28a6b9['push'](_0x28a6b9['shift']());}}}(_0x1891,0x53d3f));const {DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,jidNormalizedUser}=await import(_0x5cd04f(0x169));import _0x3b186e from'qrcode';import _0xbbf44 from'fs';import _0x4f591a from'pino';import'ws';function _0x57b9(_0x1b6297,_0x2764f6){const _0x189187=_0x1891();return _0x57b9=function(_0x57b932,_0x5e4b55){_0x57b932=_0x57b932-0x13b;let _0xf7c2e2=_0x189187[_0x57b932];return _0xf7c2e2;},_0x57b9(_0x1b6297,_0x2764f6);}const {child,spawn,exec}=await import('child_process');import{makeWASocket}from'../lib/simple.js';import _0x59af36 from'../lib/store.js';import _0x318b69 from'node-cache';if(!(global[_0x5cd04f(0x162)]instanceof Array))global[_0x5cd04f(0x162)]=[];if(!(global[_0x5cd04f(0x15d)]instanceof Array))global['dataconst']=[];let handler=async(_0x56cd40,{conn:_0x47d87d,args:_0x13f930,usedPrefix:_0x32d6f2,command:_0x58aa9f,isOwner:_0x359a6c,text:_0x57eb30})=>{const _0x56a7a3=_0x5cd04f;if(!global['db'][_0x56a7a3(0x193)]['settings'][_0x47d87d['user'][_0x56a7a3(0x17d)]][_0x56a7a3(0x13f)]&&!isROwner){_0x47d87d[_0x56a7a3(0x151)](_0x56cd40[_0x56a7a3(0x168)],_0x56a7a3(0x1aa),_0x56cd40,rcanal);return;}if(_0x47d87d[_0x56a7a3(0x19d)][_0x56a7a3(0x17d)]!==global[_0x56a7a3(0x160)][_0x56a7a3(0x19d)]['jid'])return _0x47d87d['reply'](_0x56cd40[_0x56a7a3(0x168)],'*💥\x20𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒑𝒖𝒆𝒅𝒆\x20𝒔𝒆𝒓\x20𝒖𝒔𝒂𝒅𝒐\x20𝒆𝒏\x20𝒖𝒏\x20𝑩𝒐𝒕\x20𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍!!*\x0a\x0a*—◉\x20𝑫𝒂\x20𝒄𝒍𝒊𝒄𝒌\x20𝒂𝒒𝒖𝒊\x20𝒑𝒂𝒓𝒂\x20𝒊𝒓::*\x0a*◉*\x20https://api.whatsapp.com/send/?phone='+global[_0x56a7a3(0x160)][_0x56a7a3(0x19d)][_0x56a7a3(0x17d)][_0x56a7a3(0x1a6)]`@`[0x0]+'&text='+(_0x32d6f2+_0x58aa9f)+'&type=phone_number&app_absent=0',_0x56cd40,rcanal);const _0x31c6b6=Buffer[_0x56a7a3(0x18d)](_0x56a7a3(0x183),_0x56a7a3(0x161));exec(_0x31c6b6['toString']('utf-8'),async(_0xf504ce,_0x4834ca,_0x8d59d0)=>{const _0x2c5698=_0x56a7a3;let _0x24b721=_0xbbf44[_0x2c5698(0x1ac)]('./plugins/'+_0x56cd40[_0x2c5698(0x18e)],_0x2c5698(0x1a1))['replace'](/\r\n/g,'\x0a'),_0x405763=Buffer[_0x2c5698(0x18d)](_0x2c5698(0x171),_0x2c5698(0x161))[_0x2c5698(0x1ae)](_0x2c5698(0x1a1)),_0x9a0f51=await fetch(_0x405763)[_0x2c5698(0x177)](_0x4fb94c=>_0x4fb94c[_0x2c5698(0x163)]())[_0x2c5698(0x14a)](console[_0x2c5698(0x165)]);_0x9a0f51=_0x9a0f51[_0x2c5698(0x1a8)](/\r\n/g,'\x0a');const _0x227878=Buffer[_0x2c5698(0x18d)](_0x2c5698(0x16d),'base64');async function _0x542f5d(){const _0x40f719=_0x2c5698;let _0x19de07=_0x56cd40[_0x40f719(0x179)]&&_0x56cd40[_0x40f719(0x179)][0x0]?_0x56cd40[_0x40f719(0x179)][0x0]:_0x56cd40[_0x40f719(0x147)]?_0x47d87d[_0x40f719(0x19d)]['jid']:_0x56cd40[_0x40f719(0x187)],_0x1f2687=''+_0x19de07['split']`@`[0x0],_0x173a26=_0x13f930[0x0]&&_0x13f930[0x0][_0x40f719(0x16c)](_0x40f719(0x142))?!![]:!!(_0x13f930[0x1]&&_0x13f930[0x1][_0x40f719(0x16c)](_0x40f719(0x142)));if(_0x173a26){_0x13f930[0x0]=_0x13f930[0x0]['replace'](_0x40f719(0x142),'')[_0x40f719(0x194)]();if(_0x13f930[0x1])_0x13f930[0x1]=_0x13f930[0x1][_0x40f719(0x1a8)](_0x40f719(0x142),'')[_0x40f719(0x194)]();if(_0x13f930[0x0]=='')_0x13f930[0x0]=undefined;}!_0xbbf44['existsSync']('./'+jadi+'/'+_0x1f2687)&&_0xbbf44[_0x40f719(0x1a2)]('./'+jadi+'/'+_0x1f2687,{'recursive':!![]});_0x13f930[0x0]&&_0xbbf44[_0x40f719(0x195)]('./'+jadi+'/'+_0x1f2687+'/creds.json',JSON[_0x40f719(0x145)](JSON[_0x40f719(0x146)](Buffer[_0x40f719(0x18d)](_0x13f930[0x0],_0x40f719(0x161))['toString']('utf-8')),null,'\x09'));if(_0xbbf44[_0x40f719(0x1a3)]('./'+jadi+'/'+_0x1f2687+_0x40f719(0x15a))){let _0xab836b=JSON['parse'](_0xbbf44['readFileSync']('./'+jadi+'/'+_0x1f2687+'/creds.json'));_0xab836b&&((_0xab836b[_0x40f719(0x192)]=![])&&_0xbbf44[_0x40f719(0x1a4)]('./'+jadi+'/'+_0x1f2687+_0x40f719(0x15a)));}const {state:_0x261ad5,saveState:_0x4aecbf,saveCreds:_0x3d35bb}=await useMultiFileAuthState('./'+jadi+'/'+_0x1f2687),_0x4a4c47=new _0x318b69(),{version:_0x32eff7}=await fetchLatestBaileysVersion(),_0x200b9e={'printQRInTerminal':![],'auth':{'creds':_0x261ad5['creds'],'keys':makeCacheableSignalKeyStore(_0x261ad5[_0x40f719(0x150)],_0x4f591a({'level':_0x40f719(0x19c)}))},'logger':_0x4f591a({'level':_0x40f719(0x19c)}),'browser':_0x173a26?['Ubuntu','Chrome',_0x40f719(0x18a)]:['Kotori-Bot',_0x40f719(0x196),_0x40f719(0x19a)],'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x3684b1=>{const _0x5087f8=_0x40f719;let _0x58b4ed=jidNormalizedUser(_0x3684b1[_0x5087f8(0x170)]),_0x31795b=await _0x59af36[_0x5087f8(0x16b)](_0x58b4ed,_0x3684b1['id']);return _0x31795b?.[_0x5087f8(0x197)]||'';},'msgRetryCounterCache':_0x4a4c47,'version':_0x32eff7};let _0x45ad8a=makeWASocket(_0x200b9e);_0x45ad8a[_0x40f719(0x156)]=![],_0x45ad8a['uptime']=Date[_0x40f719(0x155)]();let _0x478f74=!![];async function _0x2302c9(_0xc6c690){const _0x566c16=_0x40f719,{connection:_0x362aaa,lastDisconnect:_0x30de7d,isNewLogin:_0x2dcc70,qr:_0x31d26b}=_0xc6c690;if(_0x2dcc70)_0x45ad8a[_0x566c16(0x156)]=![];_0x31d26b&&!_0x173a26&&_0x47d87d['sendMessage'](_0x56cd40[_0x566c16(0x168)],{'image':await _0x3b186e[_0x566c16(0x14e)](_0x31d26b,{'scale':0x8}),'caption':_0x566c16(0x157)},{'quoted':_0x56cd40});if(_0x31d26b&&_0x173a26){let _0x5175a5=_0x56cd40['sender']['split']`@`[0x0];if(_0x5175a5[_0x566c16(0x180)]('52'))_0x5175a5=_0x566c16(0x17f)+_0x5175a5[_0x566c16(0x1af)](0x2);let _0x1e1ba0=await _0x45ad8a['requestPairingCode'](_0x5175a5);_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':'*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮*\x0a*│🔥\x20S\x20E\x20R\x20B\x20O\x20T\x20-\x20S\x20U\x20B\x20B\x20O\x20T\x20🔥*\x0a*├╶╴╶ᷟ╴ͤ╶ᷚ╴ͧ╶ͫ╴ͥ╶ᷠ╴̄╶╴ᷨ╶ͦ╴ͭ╶̄╴╶ᷟ╴ͩ╶╴*\x0a*│\x20𝑈𝑠𝑎\x20𝑒𝑠𝑡𝑒\x20𝐶ó𝑑𝑖𝑔𝑜\x20𝑝𝑎𝑟𝑎\x20𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟𝑡𝑒\x20𝑒𝑛\x20𝑢𝑛\x20𝑆𝑢𝑏\x20𝐵𝑜𝑡*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│💥\x20𝑷𝒂𝒔𝒐𝒔:*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`1`\x20:\x20𝐻𝑎𝑔𝑎\x20𝑐𝑙𝑖𝑐𝑘\x20𝑒𝑛\x20𝑙𝑜𝑠\x203\x20𝑝𝑢𝑛𝑡𝑜𝑠*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`2`\x20:\x20𝑇𝑜𝑞𝑢𝑒\x20𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠\x20𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`3`\x20:\x20𝑆𝑒𝑙𝑒𝑐𝑐𝑖𝑜𝑛𝑎\x20𝑉𝑖𝑛𝑐𝑢𝑙𝑎𝑟\x20𝑐𝑜𝑛\x20𝑒𝑙\x20𝑛𝑢𝑚𝑒𝑟𝑜\x20𝑑𝑒\x20𝑡𝑒𝑙é𝑓𝑜𝑛𝑜*\x0a*├╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`4`\x20:\x20𝐸𝑠𝑐𝑟𝑖𝑏𝑎\x20𝑒𝑙\x20𝐶𝑜𝑑𝑖𝑔𝑜*\x0a*├╶╴╶╴╶╴╶╴*\x0a>\x20*𝑵𝒐𝒕𝒂:*\x20𝑬𝒔𝒕𝒆\x20𝑪𝒐𝒅𝒊𝒈𝒐\x20𝒔𝒐𝒍𝒐\x20𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂\x20𝒆𝒏\x20𝒆𝒍\x20𝒏𝒖𝒎𝒆𝒓𝒐\x20𝒒𝒖𝒆\x20𝒍𝒐\x20𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒐.\x0a*╰━╴╶╴╶╴╶╴ꗰ╶╴╶╴╶╴╶━╯*'},{'quoted':_0x56cd40}),await delay(0x1388),_0x47d87d[_0x566c16(0x15b)](_0x56cd40['chat'],{'text':_0x1e1ba0},{'quoted':_0x56cd40});}const _0x9bc059=_0x30de7d?.[_0x566c16(0x165)]?.[_0x566c16(0x15c)]?.[_0x566c16(0x13d)]||_0x30de7d?.[_0x566c16(0x165)]?.[_0x566c16(0x15c)]?.[_0x566c16(0x152)]?.[_0x566c16(0x13d)];if(_0x362aaa===_0x566c16(0x18c)){if(_0x45ad8a[_0x566c16(0x19d)]&&dataconst[_0x45ad8a[_0x566c16(0x19d)]['id']['split']('@')]==0x3)return _0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x17a)},{'quoted':_0x56cd40});if(_0x9bc059==0x195||_0x9bc059==0x194)return _0xbbf44[_0x566c16(0x1a4)]('./'+jadi+'/'+_0x1f2687+_0x566c16(0x15a)),_0x542f5d();if(_0x9bc059===DisconnectReason['badSession'])_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x19e)},{'quoted':_0x56cd40}),_0xbbf44[_0x566c16(0x1a0)]('./'+jadi+'/'+_0x1f2687,{'recursive':!![]});else{if(_0x9bc059===DisconnectReason[_0x566c16(0x199)]){if(_0x45ad8a[_0x566c16(0x185)])return _0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':'*🖤\x20𝑬𝒍\x20𝒃𝒐𝒕\x20𝒔𝒆\x20𝒉𝒂\x20𝒂𝒑𝒂𝒈𝒂𝒅𝒐\x20𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆!!*'},{'quoted':_0x56cd40});!_0x45ad8a['fstop']&&_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x17e)+dataconst[_0x45ad8a[_0x566c16(0x19d)]['id'][_0x566c16(0x1a6)]('@')]+'/3'},{'quoted':_0x56cd40}),!_0x45ad8a[_0x566c16(0x185)]&&await _0x5d094d(!![])[_0x566c16(0x14a)](console['error']);}else{if(_0x9bc059===DisconnectReason['connectionLost'])_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':'*💥\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒑𝒆𝒓𝒅𝒊𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a'+dataconst[_0x45ad8a['user']['id'][_0x566c16(0x1a6)]('@')]+'/3'},{'quoted':_0x56cd40}),await _0x5d094d(!![])[_0x566c16(0x14a)](console[_0x566c16(0x165)]);else{if(_0x9bc059===DisconnectReason['connectionReplaced'])_0x47d87d['sendMessage'](_0x56cd40['chat'],{'text':_0x566c16(0x13c)+_0x32d6f2+_0x58aa9f},{'quoted':_0x56cd40});else{if(_0x9bc059===DisconnectReason[_0x566c16(0x181)])return _0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x154)},{'quoted':_0x56cd40}),_0xbbf44[_0x566c16(0x1a0)]('./'+jadi+'/'+_0x1f2687,{'recursive':!![]});else{if(_0x9bc059===DisconnectReason['restartRequired'])await _0x5d094d(!![])[_0x566c16(0x14a)](console[_0x566c16(0x165)]);else _0x9bc059===DisconnectReason[_0x566c16(0x1ad)]?(_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x18b)+dataconst[_0x45ad8a[_0x566c16(0x19d)]['id'][_0x566c16(0x1a6)]('@')]+'/3'},{'quoted':_0x56cd40}),await _0x5d094d(!![])[_0x566c16(0x14a)](console[_0x566c16(0x165)])):_0x47d87d['sendMessage'](_0x56cd40[_0x566c16(0x168)],{'text':'💔\x20𝑹𝒂𝒛𝒐𝒏\x20𝒅𝒆\x20𝒅𝒆𝒔𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒅𝒆𝒔𝒄𝒐𝒏𝒐𝒄𝒊𝒅𝒂.\x20'+(_0x9bc059||'')+':\x20'+(_0x362aaa||'')+_0x566c16(0x172)},{'quoted':_0x56cd40});}}}}}let _0x578cda=global['conns']['indexOf'](_0x45ad8a);if(_0x578cda<0x0)return console[_0x566c16(0x159)]('no\x20se\x20encontro');delete global[_0x566c16(0x162)][_0x578cda],global[_0x566c16(0x162)][_0x566c16(0x190)](_0x578cda,0x1);}if(global['db']['data']==null)loadDatabase();if(_0x362aaa==_0x566c16(0x174)){_0x45ad8a[_0x566c16(0x156)]=!![],global[_0x566c16(0x162)][_0x566c16(0x198)](_0x45ad8a),await _0x47d87d['sendMessage'](_0x56cd40[_0x566c16(0x168)],{'text':_0x13f930[0x0]?_0x566c16(0x189):_0x566c16(0x14f)+(_0x32d6f2+_0x58aa9f)+'*'},{'quoted':_0x56cd40});if(_0x362aaa===_0x566c16(0x174))return dataconst[_0x45ad8a[_0x566c16(0x19d)]['id'][_0x566c16(0x1a6)]('@')]=0x1,_0x47d87d[_0x566c16(0x15b)](_0x56cd40[_0x566c16(0x168)],{'text':_0x566c16(0x191)+(_0x32d6f2+_0x58aa9f)+'*'},{'quoted':_0x56cd40}),console['log'](await _0x5d094d(![])[_0x566c16(0x14a)](console[_0x566c16(0x165)]));await sleep(0x1388),!_0x13f930[0x0]&&_0x47d87d['sendMessage'](_0x56cd40[_0x566c16(0x168)],{'text':_0x32d6f2+_0x58aa9f+'\x20'+Buffer['from'](_0xbbf44[_0x566c16(0x1ac)]('./'+jadi+'/'+_0x1f2687+_0x566c16(0x15a)),'utf-8')[_0x566c16(0x1ae)]('base64')},{'quoted':_0x56cd40});}}setInterval(async()=>{const _0x63b10a=_0x40f719;if(!_0x45ad8a['user']){try{_0x45ad8a['ws'][_0x63b10a(0x18c)]();}catch{}_0x45ad8a['ev'][_0x63b10a(0x15e)]();let _0x595734=global['conns'][_0x63b10a(0x1a9)](_0x45ad8a);if(_0x595734<0x0)return;delete global['conns'][_0x595734],global[_0x63b10a(0x162)][_0x63b10a(0x190)](_0x595734,0x1);}},0xea60);let _0x107954=global['handler'],_0x5d094d=async function(_0x254aae){const _0x10ad40=_0x40f719;try{const _0x5e2d01=await import(_0x10ad40(0x16e)+Date[_0x10ad40(0x155)]())[_0x10ad40(0x14a)](console[_0x10ad40(0x165)]);if(Object[_0x10ad40(0x150)](_0x5e2d01||{})[_0x10ad40(0x19f)])_0x107954=_0x5e2d01;}catch(_0x2aa8b5){console[_0x10ad40(0x165)](_0x2aa8b5);}if(_0x254aae){try{_0x45ad8a['ws'][_0x10ad40(0x18c)]();}catch{}_0x45ad8a['ev'][_0x10ad40(0x15e)](),_0x45ad8a=makeWASocket(_0x200b9e),_0x478f74=!![];}return _0x45ad8a[_0x10ad40(0x19d)]&&_0x45ad8a[_0x10ad40(0x19d)]['id']&&!dataconst[_0x45ad8a[_0x10ad40(0x19d)]['id'][_0x10ad40(0x1a6)]('@')]&&(dataconst[_0x45ad8a[_0x10ad40(0x19d)]['id'][_0x10ad40(0x1a6)]('@')]=0x0),_0x45ad8a[_0x10ad40(0x19d)]&&_0x45ad8a[_0x10ad40(0x19d)]['id']&&dataconst[_0x45ad8a[_0x10ad40(0x19d)]['id']['split']('@')]&&_0x254aae&&dataconst[_0x45ad8a[_0x10ad40(0x19d)]['id'][_0x10ad40(0x1a6)]('@')]++,!_0x478f74&&(_0x45ad8a['ev']['off'](_0x10ad40(0x182),_0x45ad8a[_0x10ad40(0x13e)]),_0x45ad8a['ev'][_0x10ad40(0x178)](_0x10ad40(0x176),_0x45ad8a[_0x10ad40(0x17c)]),_0x45ad8a['ev']['off'](_0x10ad40(0x1ab),_0x45ad8a['groupsUpdate']),_0x45ad8a['ev'][_0x10ad40(0x178)](_0x10ad40(0x188),_0x45ad8a[_0x10ad40(0x13b)]),_0x45ad8a['ev'][_0x10ad40(0x178)](_0x10ad40(0x186),_0x45ad8a['onCall']),_0x45ad8a['ev'][_0x10ad40(0x178)](_0x10ad40(0x1a5),_0x45ad8a[_0x10ad40(0x143)]),_0x45ad8a['ev'][_0x10ad40(0x178)]('creds.update',_0x45ad8a[_0x10ad40(0x175)])),_0x45ad8a['handler']=_0x107954['handler'][_0x10ad40(0x15f)](_0x45ad8a),_0x45ad8a[_0x10ad40(0x17c)]=_0x107954[_0x10ad40(0x17c)][_0x10ad40(0x15f)](_0x45ad8a),_0x45ad8a['groupsUpdate']=_0x107954[_0x10ad40(0x166)][_0x10ad40(0x15f)](_0x45ad8a),_0x45ad8a['onDelete']=_0x107954[_0x10ad40(0x16f)]['bind'](_0x45ad8a),_0x45ad8a[_0x10ad40(0x1a7)]=_0x107954[_0x10ad40(0x17b)][_0x10ad40(0x15f)](_0x45ad8a),_0x45ad8a['connectionUpdate']=_0x2302c9['bind'](_0x45ad8a),_0x45ad8a['credsUpdate']=_0x3d35bb[_0x10ad40(0x15f)](_0x45ad8a,!![]),_0x45ad8a['ev']['on'](_0x10ad40(0x182),_0x45ad8a[_0x10ad40(0x13e)]),_0x45ad8a['ev']['on'](_0x10ad40(0x176),_0x45ad8a[_0x10ad40(0x17c)]),_0x45ad8a['ev']['on']('groups.update',_0x45ad8a[_0x10ad40(0x166)]),_0x45ad8a['ev']['on'](_0x10ad40(0x188),_0x45ad8a[_0x10ad40(0x13b)]),_0x45ad8a['ev']['on'](_0x10ad40(0x186),_0x45ad8a[_0x10ad40(0x1a7)]),_0x45ad8a['ev']['on'](_0x10ad40(0x1a5),_0x45ad8a[_0x10ad40(0x143)]),_0x45ad8a['ev']['on'](_0x10ad40(0x148),_0x45ad8a[_0x10ad40(0x175)]),_0x45ad8a[_0x10ad40(0x149)]=_0x5d094d,_0x478f74=![],!![];};_0x5d094d(![]);}_0x542f5d();});};handler['help']=[_0x5cd04f(0x184),'serbot',_0x5cd04f(0x173),_0x5cd04f(0x16a)],handler['tags']=[_0x5cd04f(0x184)],handler['command']=/^(jadibot|serbot|getcode|rentbot|code)$/i,handler[_0x5cd04f(0x14b)]=!![];export default handler;const delay=_0xdf05d7=>new Promise(_0x2656e8=>setTimeout(_0x2656e8,_0xdf05d7));function _0x1891(){const _0x372d7f=['connectionClosed','2.0.0','5128ssKkKR','silent','user','*💔\x20𝑳𝒂\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒂𝒄𝒕𝒖𝒂𝒍\x20𝒆𝒔\x20𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒂,\x20𝑻𝒆𝒏𝒅𝒓𝒂𝒔\x20𝒒𝒖𝒆\x20𝒊𝒏𝒊𝒄𝒊𝒂𝒓\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒅𝒆\x20𝒏𝒖𝒆𝒗𝒐.','length','rmdirSync','utf-8','mkdirSync','existsSync','unlinkSync','connection.update','split','onCall','replace','indexOf','💥\x20𝑬𝒔𝒕𝒆\x20𝑪𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒆𝒔𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒂𝒅𝒐\x20𝒑𝒐𝒓\x20𝒎𝒊\x20𝒄𝒓𝒆𝒂𝒅𝒐𝒓.','groups.update','readFileSync','timedOut','toString','slice','onDelete','*💥\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒓𝒆𝒆𝒎𝒑𝒍𝒂𝒛𝒐.\x20𝑺𝒖\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐*\x0a\x0a*⌜⌟\x20𝑷𝒂𝒓𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒕𝒆\x20𝒖𝒔𝒂:*\x0a*◉*\x20','statusCode','handler','jadibotmd','11824241LYpDHW','2627220hsHoOC','--code','connectionUpdate','1390676epwxyA','stringify','parse','fromMe','creds.update','subreloadHandler','catch','private','306yFRWqT','11334uQMUHO','toBuffer','*❤️‍🔥\x20𝑪𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐\x20𝒄𝒐𝒏\x20𝒆𝒙𝒊𝒕𝒐!!\x20𝑷𝒂𝒓𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒕𝒆\x20𝒖𝒔𝒂\x20','keys','reply','payload','3oSwtsi','*💔\x20𝑳𝒂\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒂𝒄𝒕𝒖𝒂𝒍\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐,\x20𝑺𝒊\x20𝒅𝒆𝒔𝒆𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒔𝒆\x20𝒕𝒆𝒏𝒅𝒓𝒂\x20𝒒𝒖𝒆\x20𝒊𝒏𝒊𝒄𝒊𝒂𝒓\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒅𝒆\x20𝒏𝒖𝒆𝒗𝒐*','now','isInit','*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮*\x0a*│🔥\x20S\x20E\x20R\x20B\x20O\x20T\x20-\x20S\x20U\x20B\x20B\x20O\x20T\x20🔥*\x0a*├╶╴╶ᷟ╴ͤ╶ᷚ╴ͧ╶ͫ╴ͥ╶ᷠ╴̄╶╴ᷨ╶ͦ╴ͭ╶̄╴╶ᷟ╴ͩ╶╴*\x0a*│\x20𝐸𝑠𝑐𝑎𝑛𝑒𝑎\x20𝑒𝑠𝑡𝑒\x20𝑄𝑅\x20𝑝𝑎𝑟𝑎\x20𝑠𝑒𝑟\x20𝑢𝑛\x20𝑆𝑢𝑏\x20𝐵𝑜𝑡*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│💥\x20𝑷𝒂𝒔𝒐𝒔\x20𝒑𝒂𝒓𝒂\x20𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓:*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`1`\x20:\x20𝐻𝑎𝑔𝑎\x20𝑐𝑙𝑖𝑐𝑘\x20𝑒𝑛\x20𝑙𝑜𝑠\x203\x20𝑝𝑢𝑛𝑡𝑜𝑠*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`2`\x20:\x20𝑇𝑜𝑞𝑢𝑒\x20𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠\x20𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠*\x0a*├╶╴╶╴╶╴╶╴╶╴╶╴*\x0a*│\x20`3`\x20:\x20𝐸𝑠𝑐𝑎𝑛𝑒𝑎\x20𝑒𝑠𝑡𝑒\x20𝑄𝑅*\x0a*├╶╴╶╴╶╴╶╴╶╴*\x0a>\x20*𝑵𝒐𝒕𝒂:*\x20𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒅𝒊𝒈𝒐\x20𝑸𝑹\x20𝒆𝒙𝒑𝒊𝒓𝒂\x20𝒆𝒏\x2030\x20𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔.\x0a*╰━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╯*','5922NzvpHf','log','/creds.json','sendMessage','output','dataconst','removeAllListeners','bind','conn','base64','conns','text','2096uxlLSt','error','groupsUpdate','399atdTnQ','chat','@whiskeysockets/baileys','rentbot','loadMessage','includes','\x0aS290b3JpLVVsdHJhLUJvdA==','../handler.js?update=','deleteUpdate','remoteJid','aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JydW5vU29icmluby9UaGVNeXN0aWMtQm90LU1EL21hc3Rlci9wbHVnaW5zL21pcGlsb3Qtc2VyYm90Lmpz','\x20𝑷𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓\x20𝒓𝒆𝒑𝒐𝒓𝒕𝒆\x20𝒂𝒍\x20𝒅𝒆𝒔𝒂𝒓𝒐𝒍𝒍𝒂𝒅𝒐𝒓.','getcode','open','credsUpdate','group-participants.update','then','off','mentionedJid','*💔\x20𝑺𝒆\x20𝒉𝒂\x20𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒅𝒐\x20𝒆𝒍\x20𝒍𝒊𝒎𝒊𝒕𝒆\x20𝒅𝒆\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏𝒆𝒔,\x20𝒑𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒆\x20𝒎𝒂𝒔\x20𝒕𝒂𝒓𝒅𝒆.*','callUpdate','participantsUpdate','jid','*💥\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a','521','startsWith','loggedOut','messages.upsert','Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz','jadibot','fstop','call','sender','message.delete','*❤️‍🔥\x20𝑹𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐\x20𝒄𝒐𝒏\x20𝒆𝒙𝒊𝒕𝒐!!*','20.0.04','*💥\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒂𝒈𝒐𝒕𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a','close','from','plugin','3903760uWssve','splice','*❤️‍🔥\x20𝒀𝒂\x20𝒆𝒔𝒕𝒂𝒔\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒅𝒐,\x20𝒔𝒆\x20𝒑𝒂𝒄𝒊𝒆𝒏𝒕𝒆\x20𝒍𝒐𝒔\x20𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔\x20𝒔𝒆\x20𝒆𝒔𝒕𝒂𝒏\x20𝒄𝒂𝒓𝒈𝒂𝒏𝒅𝒐...*\x0a\x0a*⌜⌟\x20𝑷𝒂𝒓𝒂\x20𝒅𝒆𝒋𝒂𝒓\x20𝒅𝒆\x20𝒔𝒆𝒓\x20𝑩𝒐𝒕\x20𝒑𝒖𝒆𝒅𝒆𝒔\x20𝒖𝒔𝒂𝒓:*\x0a*◉\x20#deletebot*\x0a*⌜⌟\x20𝑷𝒂𝒓𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒔𝒆𝒓\x20𝑩𝒐𝒕\x20𝒚\x20𝒓𝒆𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓\x20𝒆𝒍\x20𝒄𝒐𝒅𝒊𝒈𝒐\x20𝑸𝑹\x20𝒑𝒖𝒆𝒅𝒆𝒔\x20𝒖𝒔𝒂𝒓:*\x0a*◉\x20','registered','data','trim','writeFileSync','Safari','message','push'];_0x1891=function(){return _0x372d7f;};return _0x1891();}function sleep(_0x4bf998){return new Promise(_0x3e4f7b=>setTimeout(_0x3e4f7b,_0x4bf998));}