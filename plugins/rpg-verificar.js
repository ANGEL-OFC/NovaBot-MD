// CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li
import { createHash } from 'crypto'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import axios from 'axios'
import _ from 'lodash'

let nombre = 0,
edad = 0,
genero = 0,
bio = 0,
identidad = 0,
pasatiempo = 0,
registro,
_registro,
fecha,
hora,
tiempo,
registrando,
fechaBio
let pas1 = 0,
pas2 = 0,
pas3 = 0,
pas4 = 0,
pas5 = 0

let handler = async function (m, {conn, text, command, usedPrefix}) {
let key
let sinDefinir = '😿 Es privada'
let d = new Date(new Date() + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, {weekday: 'long'})
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => gataMenu)
let ppch = await conn.profilePictureUrl(who, 'image').catch((_) => gataMenu.getRandom())
let userNationality = null
try {
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : null
} catch (err) {
userNationality = null
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let nombreWA = (await usedPrefix) + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)

let who2 = m.isGroup ? _.get(m, 'mentionedJid[0]', m.quoted?.sender || m.sender) : m.sender
let biografia = await conn.fetchStatus(who2).catch(() => null)
if (!biografia || !biografia[0] || biografia[0].status === null) {
bio = sinDefinir
fechaBio = 'Fecha no disponible'
} else {
bio = biografia[0].status || sinDefinir
fechaBio = biografia[0].setAt
? new Date(biografia[0].setAt).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'})
: 'Fecha no disponible'
}

let intervalId
function mensajeRegistro() {
if (edad === 0) {
clearInterval(intervalId)
registrando = false
return
}
if (user.registered === true) {
return
}
if (typeof genero === 'string') {
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.reply(
m.chat,
`*SU TIEMPO DE REGISTRO HA TERMINADO!!*\n\n_Si no continúa en este momento su registro no se guardará, si guarda más tarde su registro se habrá perdido_\n\n*Para continuar escriba:* ${usedPrefix}finalizar`,
fkontak,
m
)
} else {
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true
registrando = false
conn.reply(
m.chat,

if (user.registered === true)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoIIG']()}*YA ESTÁ REGISTRADO!!*\n*SI QUIERE ANULAR SU REGISTRO, USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE, USE ESTE COMANDO*\n*${usedPrefix}myns*`,
fkontak,
m
)

//let groupID = '120363146016943755@g.us'
//try {
//let groupMetadata = await conn.groupMetadata(groupID);
//let groupMembers = groupMetadata.participants.map(participant => participant.id || participant.jid);

//if (!groupMembers.includes(m.sender)) {
//throw `*👀 CÓMO DESEA REGISTRARSE?* Antes de registrarte primero debes unirte al grupo requerido:*\nhttps://chat.whatsapp.com/KNwcGS4PCEN5qjbHD5VDZM\n\n*• Después usar el comando de la siguiente manera:*\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n${usedPrefix}reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n${usedPrefix}nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``;
//}} catch (e) {
//console.log(e)}

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
await conn.reply(
m.chat,
`*👀 CÓMO DESEA REGISTRARSE?*\n\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n${usedPrefix}reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n${usedPrefix}nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``,
fkontak,
m
)
}

if (command == 'reg1') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)
}, 126000) //2.1 min
}

registro = text.replace(/\s+/g, usedPrefix)
_registro = text.split(' ', 2)
if (!text)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoIIG']()}👉 *PARÁMETROS DEL REGISTRO:*\n${usedPrefix + command} nombre edad\n\n\`\`\`EJEMPLO:\`\`\`\n${usedPrefix + command} ${gt} 20\n\n*✨ CONSEJO:*\n• _Su nombre no debe de contener números_\n• _La edad no debe de contener letras_\n\n⭐ *Si desea personalizar más su registro, escriba:*\n${usedPrefix}nombre`,
fkontak,
m
)
//if (_registro['length'] >= 3 || isNaN(_registro[1])) return
//conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPARAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro, de lo contraio vuelva a registrarse*\n➘ _Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\0-9]/gi, "") + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0])
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
if (_registro[0].length >= 30)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY LARGO, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
if (_registro[0].length <= 2)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY CORTO O FALTANTE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, '')
user.name = _registro[0]

if (!_registro[1])
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
if (isNaN(_registro[1]))
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*NO SE ENCONTRÓ LA EDAD, RECUERDE USAR:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n> *Nota:* No use prefijos ni símbolos entre el nombre y edad, solo es válido un espacio entre el nombre y la edad.`,
fkontak,
m
)
if (_registro[1] > 90)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
if (_registro[1] < 10)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
fkontak,
m
)
user.age = parseInt(_registro[1]) //_registro[1]
global.db.data.users[m.sender]['registroR'] = true

let registroRapido = ` *░ 📑 REGISTRO ACTUAL 📑 ░*
 *∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷*
┊ *✓ NOMBRE*
┊ ⁘ ${user.name === 0 ? sinDefinir : user.name}
┊
┊ *✓ EDAD*
┊ ⁘ ${user.age === 0 ? sinDefinir : user.age + ' años'}
╰┈┈┈┈┈┈┈┈┈┈┈┈•

❇️ \`\`\`Para finalizar su registro escriba:\`\`\`
✪ *${usedPrefix}finalizar*`

await conn.sendMessage(
m.chat,
{
text: registroRapido,
contextInfo: {
externalAdReply: {
title: wm,
body: '🌟 Puede modificar su registro antes de finalizar',
thumbnailUrl: pp,
sourceUrl: 'https://www.atom.bio/gatabot/',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
},
{quoted: fkontak}
)
}

if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)
}, 186000) //3.1 min
}
if (verificar.test(text) == false || text.length <= 1)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoIIG']()}👉 *PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}nombre ${gt}`,
fkontak,
m
)
if (/^\d+$/.test(text))
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE NO DEBE DE TENER SÓLO NÚMEROS, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`
},
{quoted: fkontak}
)
if (text.length >= 25)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*USE UN NOMBRE MÁS CORTO, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`
},
{quoted: fkontak}
)
if (text.length <= 2)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba ${usedPrefix}nombre2_`
},
{quoted: fkontak}
)
user.name = text
.replace(/\s+/g, '')
.replace(/[0-9]+/gi, '')
.trim()
if (user.name)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD, EJEMPLO:*\n\`\`\`${usedPrefix}edad 20\`\`\``
},
{quoted: fkontak}
)
}

if (command == 'nombre2' || command == 'name2') {
if (/^\d+$/.test(text))
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE NO DEBE DE TENER SÓLO NÚMEROS, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`
},
{quoted: fkontak}
)
if (nombreWA.slice(1).length < 2)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar 🌟 su nombre usando:*\n*${usedPrefix}nombre ${gt}*`
},
{quoted: fkontak}
)
if (nombreWA.slice(1).length > 25)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar 🌟 su nombre usando:*\n*${usedPrefix}nombre ${gt}*`
},
{quoted: fkontak}
)
user.name = nombreWA
.replace(/\s+/g, '')
.replace(/[0-9]+/gi, '')
.slice(1)
.trim()
if (user.name)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD, EJEMPLO:*\n\`\`\`${usedPrefix}edad 20\`\`\``
},
{quoted: fkontak}
)
}

if (command == 'edad' || command == 'age' || command == 'edad2' || command == 'age2') {
if (verificar.test(text.slice(1)) == false && !text)
return conn.sendMessage(
m.chat,
{text: `${lenguajeGB['smsAvisoIIG']()}*👉 AGREGUÉ SU EDAD PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}edad 20`},
{quoted: fkontak}
)
if (isNaN(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*INGRESE SOLO NÚMEROS*`, fkontak, m)
if (text > 90) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*DEMASIADO MAYOR PARA SER REGISTRADO*`, fkontak, m)
if (text < 10) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*DEMASIADO MENOR PARA SER REGISTRADO*`, fkontak, m)
user.age = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, '')
    if (verificar.test(text) == true)
      return conn.sendMessage(
        m.chat,
        {
          text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n🧬 *AHORA PUEDE REGISTRAR SU GÉNERO, EJEMPLO:*\n\`\`\`${usedPrefix}genero\`\`\``
},
{quoted: fkontak}
)
}

if (command == 'genero' || command == 'género' || command == 'gender') {
let genText = `🌟 *SELECCIONA TU GÉNERO!!*
1️⃣ ️▸ _🚹 MASCULINO (Hombre)_
2️⃣ ▸ _🚺 FEMENINO (Mujer)_
3️⃣ ▸ _👤 OCULTAR GÉNERO (Omitir)_\n
🌟 *PUEDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA ELEGIR SU GÉNERO EJEMPLO:*
✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`
✓ \`\`\`${usedPrefix}genero 2\`\`\``
if (!text) return conn.sendMessage(m.chat, {text: genText}, {quoted: fkontak})
function asignarGenero(text) {
if (text == 0 && text > 3)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU GÉNERO, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}genero 2\`\`\``,
fkontak,
m
)
switch (text) {
case '1️⃣':
case '1':
case '🚹':
genero = 'Hombre'
break
case '2️⃣':
case '2':
case '🚺':
genero = 'Mujer'
break
case '3️⃣':
case '3':
case '👤':
genero = 'Ocultado'
break
default:
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU GÉNERO, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}genero 2\`\`\``,
fkontak,
m
)
}
}
asignarGenero(text)
user.genero = genero
if (user.genero)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n*❖ GENERO:*\n${user.genero === 0 ? sinDefinir : user.genero}\n\n*🌼 AHORA PUEDE REGISTRAR SU ORIENTACIÓN SEXUAL, EJEMPLO:*\n\`\`\`${usedPrefix}identidad\`\`\``
},
{quoted: fkontak}
)
}

if (command == 'identidad' || command == 'identity') {
var generos = [
'Agénero',
'Andrógino',
'Andrógina',
'Asexual',
'Bigénero',
'Bisexual',
'Cisgénero',
'CrossDresser',
'Demigénero',
'Gay',
'Género fluido',
'Género neutro',
'Genderqueer',
'Heterosexual',
'Heteroflexible',
'Homoflexible',
'Homosexual',
'Intersexual',
'Lesbiana',
'Pansexual',
'Pangénero',
'Questioning',
'Queer',
'Sapiosexual',
'Transgénero',
'Trigénero',
'Variante/Género expansivo'
]
var emojiANumero = {'0️⃣': '0', '1️⃣': '1', '2️⃣': '2', '3️⃣': '3', '4️⃣': '4', '5️⃣': '5', '6️⃣': '6', '7️⃣': '7', '8️⃣': '8', '9️⃣': '9'}
function asignarIdentidad(text) {
text = text.replace(/[\d️⃣]/g, function (match) {
return emojiANumero[match] || match
})
var numero = parseInt(text.replace(/[^\d]/g, ''))
if (!isNaN(numero) && Number(numero) > 0 && Number(numero) <= generos.length) {
return generos[numero - 1]
} else if (!text) {
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU ORIENTACIÓN SEXUAL, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}identidad 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identidad 2\`\`\``,
fkontak,
m
)
} else {
conn.reply(
m.chat,
`${lenguajeGB['smsAvisoFG']()}*ESTÁ ELECCIÓN "${numero}" NO FORMA PARTE DE LA LISTA DE ORIENTACIONES, ELEGIR UNO DE LA LISTA POR FAVOR, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}identidad 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identidad 2\`\`\``,
fkontak,
m
)
}
}
let yyr = ''
yyr += `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*
*┊ 🌟 SELECCIONE SU ORIENTACIÓN SEXUAL!!*
*┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*\n`
generos.forEach(function (identidad, index) {
yyr += `*┊* \`\`\`[${index + 1}]\`\`\` » _${identidad}_\n`
})
yyr += '*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*'
if (!text) {
const {key} = await conn.sendMessage(m.chat, {text: yyr}, {quoted: fkontak})
await delay(1000)
await conn.sendMessage(
m.chat,
{
text: yyr + `\n\n✨ *AQUÍ UN EJEMPLO DE COMO SELECCIONAR:*\n\`\`\`${usedPrefix}identidad 4️⃣\`\`\`\n\`\`\`${usedPrefix}identidad 4\`\`\``,
edit: key
},
{quoted: fkontak}
)
}
var identidadAsignada = asignarIdentidad(text)
user.identidad = identidadAsignada
if (user.identidad && text < generos.length && text != 0)
return conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${!user.name ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${!user.age ? sinDefinir : user.age + ' años'}\n\n*❖ GENERO:*\n${!user.genero ? sinDefinir : user.genero}\n\n*❖ ORIENTACIÓN SEXUAL:*\n${!user.identidad ? sinDefinir : user.identidad}\n\n❇️ *AHORA PUEDE REGISTRAR SUS PASATIEMPOS, EJEMPLO:*\n\`\`\`${usedPrefix}pasatiempo\`\`\``
},
{quoted: fkontak}
)
}

if (command == 'pasatiempo' || command == 'hobby') {
pasatiempo = 0
pas1 = ''
pas2 = ''
pas3 = ''
pas4 = ''
pas5 = ''
var seleccion = text
var todosLosPasatiempos = [
'👟 Acroyoga',
'🎭 Actuación',
'🎭 Actuación de Improvisación',
'🎭 Actuación de voz',
'🎭 Actuación en videojuegos',
'🎭 Actuar en Comedias de Situación Radiofónicas',
'🎭 Actuar en un Circo Ambulante',
'🎭 Actuar en una Obra de Teatro Comunitaria',
'🚁 Aeromodelismo',
'🥋 Aikido',
'🎯 Airsoft',
'♟️ Ajedrez',
'🏔️ Alpinismo',
'🖥️ Animación',
'🎉 Animador/a de Equipos',
'✏️ Anime dibujos',
'🐝 Apicultura',
'🍖 Aprender a asar carnes a la parrilla',
'🎤 Aprender a cantar como mi artista favorito',
'🍤 Aprender a cocinar mariscos',
'🍳 Aprender a cocinar platos de diferentes culturas',
'🍲 Aprender a cocinar platos tradicionales japoneses',
'💻 Aprender a codificar y crear mis propias aplicaciones.',
'🎶 Aprender a componer canciones como mi artista favorito',
'🎨 Aprender a dibujar como los artistas de los videojuegos que me gustan',
'🎨 Aprender a dibujar como los artistas del anime que me gusta',
'🎼 Aprender a dirigir una orquesta',
'📜 Aprender a escribir un blog',
'🧏‍♀️ Aprender a hablar con el lenguaje de señas japonés',
'🍋 Aprender a hacer aderezos caseros',
'🍋 Aprender a hacer aderezos para ensaladas',
'📱 Aprender a hacer aplicaciones móviles',
'💐 Aprender a hacer arreglos florales japoneses',
'🍚 Aprender a hacer arroz al vapor',
'🍚 Aprender a hacer arroz con diferentes técnicas',
'🍚 Aprender a hacer arroz con frijoles',
'🍚 Aprender a hacer arroz con leche',
'🍚 Aprender a hacer arroz con pollo',
'🍚 Aprender a hacer arroz con verduras',
'🍚 Aprender a hacer arroz frito',
'🍚 Aprender a hacer arroz integral',
'🍹 Aprender a hacer batidos de frutas',
'🍹 Aprender a hacer batidos de proteínas',
'🍦 Aprender a hacer batidos y smoothies',
'🥗 Aprender a hacer bowls de granos',
'🍤 Aprender a hacer brochetas',
'🍪 Aprender a hacer brownies y blondies',
'🍳 Aprender a hacer brunch',
'🍕 Aprender a hacer calzones y empanadas',
'🍤 Aprender a hacer camarones a la parrilla',
'🍤 Aprender a hacer camarones al ajillo',
'🤝 Unirme a una comunidad online de jugadores',
'👉 Ver a Casey Neistat',
'👉 Ver a Drew Gooden',
'👉 Ver a DrossRotzank',
'👉 Ver a Germán Garmendia',
'👉 Ver a iJustine',
'👉 Ver a James Charles',
'👉 Ver a Jeffree Star',
'👉 Ver a Jenna Marbles',
'👉 Ver a JuegaGerman',
'👉 Ver a KSI',
'👉 Ver a Kwebbelkop',
'👉 Ver a Logan Paul',
'👉 Ver a Markiplier',
'👉 Ver a Nigahiga',
'👉 Ver a Rosanna Pansino',
"👉 Ver a Ryan's World",
'👉 Ver a Shane Dawson',
'👉 Ver a Simply Nailogical',
'👉 Ver a The Try Guys',
'👉 Ver a TheOdd1sOut',
'👉 Ver el canal de CinemaSins',
'👉 Ver el canal de David Dobrik',
'👉 Ver el canal de Dude Perfect',
'👉 Ver el canal de Good Mythical Morning',
'👉 Ver el canal de How Ridiculous',
'👉 Ver el canal de Kurtis Conner',
'👉 Ver el canal de Lilly Singh',
'👉 Ver el canal de Linus Tech Tips',
'👉 Ver el canal de Logan Paul',
'👉 Ver el canal de NigaHiga',
'👉 Ver el canal de NikkieTutorials',
'👉 Ver el canal de PewDiePie',
'👉 Ver el canal de Rhett & Link',
'👉 Ver el canal de Rosanna Pansino',
'👉 Ver el canal de Tati Westbrook',
'👉 Ver el canal de The ACE Family',
'👉 Ver el canal de The Try Guys',
'👉 Ver el canal de Troom Troom',
'👉 Ver el canal de T-Series',
'👉 Ver el canal de Vegetta777',
'📺 Ver maratones de mis series de televisión favoritas',
'📺 Ver televisión',
'📺 Ver todos los episodios de mi anime favorito en un día',
'🌎 Viajar',
'🎒 Viajar de mochilero/a',
'🌍 Viajar y explorar nuevas culturas.',
'🎈 Viajes en Globo Aerostático',
'🎮 Videojuegos de mundo abierto',
'🎮 Videojuegos de mundo abierto en línea',
'🎮 Videojuegos de supervivencia en línea',
'🎮 Videojuegos de terror',
'🎮 Videojuegos retro',
'🎻 Violonchelo',
'🫂 Visitar amigos',
'🏰 Visitar castillos',
'🏝️ Visitar playas y hacer snorkel.',
'🏛️ Visitas virtuales a museos',
'📹 Vlog',
'📹 Vlogging',
'🏐 Voleibol',
'🌍 Voluntariado Internacional',
'🚁 Vuelo en helicóptero',
'👟 Yoga',
'🧘 Yoga Acrobático',
'🧘 Yoga acuático',
'🧘 Yoga aéreo',
'🧘 Yoga caliente',
'🧘 Yoga en el Parque con la Comunidad',
'🧘 Yoga facial',
'🧘 Yoga para embarazadas',
'🧘 Yoga para niños.'
]

var emojiANumero = {
'0️⃣': '0',
'1️⃣': '1',
'2️⃣': '2',
'3️⃣': '3',
'4️⃣': '4',
'5️⃣': '5',
'6️⃣': '6',
'7️⃣': '7',
'8️⃣': '8',
'9️⃣': '9'
}
const pasatiemposMap = new Map()
function eliminarEmojis(texto) {
return texto.replace(/[^\w\s]/g, '').toLowerCase()
}
todosLosPasatiempos.forEach((pasatiempo) => {
const textoSinEmoji = eliminarEmojis(pasatiempo)
if (!pasatiemposMap.has(textoSinEmoji)) {
pasatiemposMap.set(textoSinEmoji, pasatiempo.replace(/\.$/, ''))
}
})
let todosLosPasatiemposOrdenados = Array.from(pasatiemposMap.values()).sort(function (a, b) {
const textoA = eliminarEmojis(a)
const textoB = eliminarEmojis(b)
return textoA.localeCompare(textoB)
})
function asignarPasatiempo(text) {
var numero = parseInt(text.replace(/\D/g, ''))
if (numero >= 1 && numero <= todosLosPasatiemposOrdenados.length) {
return todosLosPasatiemposOrdenados[numero - 1]
} else if (text.trim() !== '') {
var pasatiempoIngresado = text.replace(/\D/g, '')
conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*EL PASATIEMPO "${!pasatiempoIngresado ? 'CONTIENE LETRAS 🔡' : pasatiempoIngresado === undefined ? 'DE ALGUNA POSICIÓN' : pasatiempoIngresado}" QUE NO FORMA PARTE DE LA LISTA DE PASATIEMPOS*`,
fkontak,
m
)
return
}
}
let yyr1 = ''
let yyr2 = ''
let yyr3 = ''
let yyr4 = ''
let header = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┊ 🎉 ¡PASATIEMPOS DISPONIBLES!
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯\n`
yyr1 += header
yyr2 += header
yyr3 += header
yyr4 += header
//.replace(/[^\p{L}\p{N}]/gu, '') // Elimina caracteres que no sean letras o números
let primeraParte = todosLosPasatiemposOrdenados.slice(0, 100)
let segundaParte = todosLosPasatiemposOrdenados.slice(500, 1000)
let terceraParte = todosLosPasatiemposOrdenados.slice(1000, 1500)
let cuartaParte = todosLosPasatiemposOrdenados.slice(1500)

primeraParte.forEach((pasatiempo, index) => {
yyr1 += ` [ ${index + 1} ] » ${pasatiempo}\n`
})
segundaParte.forEach((pasatiempo, index) => {
yyr2 += ` [ ${index + 501} ] » ${pasatiempo}\n`
})
terceraParte.forEach((pasatiempo, index) => {
yyr3 += ` [ ${index + 1001} ] » ${pasatiempo}\n`
})
cuartaParte.forEach((pasatiempo, index) => {
yyr4 += ` [ ${index + 1501} ] » ${pasatiempo}\n`
})
let footer = '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈'
yyr1 += footer
yyr2 += footer
yyr3 += footer
yyr4 += footer
var maximoIndice = todosLosPasatiemposOrdenados.length - 0
async function seleccionarPasatiempos(texto) {
var seleccionados = texto.split(',').map(function (item) {
return item.trim()
})

var pasatiemposSet = new Set()
for (var i = 0; i < seleccionados.length; i++) {
var pasatiempoSeleccionado = asignarPasatiempo(seleccionados[i])
if (pasatiempoSeleccionado !== undefined) {
pasatiemposSet.add(pasatiempoSeleccionado)
if (!pas1) {
pas1 = pasatiempoSeleccionado
} else if (!pas2) {
pas2 = pasatiempoSeleccionado
} else if (!pas3) {
pas3 = pasatiempoSeleccionado
} else if (!pas4) {
pas4 = pasatiempoSeleccionado
} else if (!pas5) {
pas5 = pasatiempoSeleccionado
}
}
}
var pasatiemposUnicos = Array.from(pasatiemposSet)
var resultado = pasatiemposUnicos.join(', ')
var pasatiemposSeleccionados = [pas1, pas2, pas3, pas4, pas5].filter((pasatiempo) => pasatiempo !== '')
var posicionesSet = new Set(pasatiemposSeleccionados)
if (pasatiemposUnicos.length >= 1 && pasatiemposUnicos.length <= 5) {
if (pasatiemposSeleccionados.length >= 1 && pasatiemposSeleccionados.length <= 5 && pasatiemposSeleccionados.length === posicionesSet.size) {
//console.log("Pasatiempos seleccionados:", resultado)
user.pasatiempo = resultado
global.db.data.users[m.sender]['registroC'] = true
conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}*GENIAL!! SE HA AGREGADO \`${pasatiemposSeleccionados.length}/5\` PASATIEMPOS*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${user.pasatiempo === 0 ? sinDefinir : user.pasatiempo}*\n\n🌟 *PARA GUARDAR SU REGISTRO ESCRIBA:*\n\`\`\`${usedPrefix}finalizar\`\`\``
},
{quoted: fkontak}
)
//console.log("Pasatiempos por separado:", pas1, pas2, pas3, pas4, pas5)
} else {
conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*EL PASATIEMPO "${pasatiempoSeleccionado === undefined ? 'DE ALGUNA POSICIÓN' : pasatiempoSeleccionado}" YA HA SIDO SELECCIONADO*`,
fkontak,
m
)
return
}
} else {
if (text) return
await conn.sendEvent(
m.chat,
gt + ' - Primera lista de pasatiempos.',
`🌟 *SELECCIONE MÍNIMO UN PASATIEMPO Y MÁXIMO CINCO PASATIEMPOS*\n\n*Para seleccionar varios pasatiempos separé por comas (,) además puede usar números o emojis numéricos, ejemplo:*\n\n✪ *(1 pasatiempo)*\n✓ \`\`\`${usedPrefix + command} 2️⃣\`\`\`\n\n✪ *(2 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 45, 65\`\`\`\n\n✪ *(3 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 2️⃣4️⃣, 1️⃣5️⃣6️⃣, 8️⃣9️⃣\`\`\`\n\n✪ *(4 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 223, 456, 6, 4\`\`\`\n\n✪ *(5 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 56, 5️⃣1️⃣6️⃣, 345, 2️⃣4️⃣, 200\`\`\`\n\n_Si quieres que este un pasatiempo que no forma parte de esta lista contacta con los creadores de este bot._\n\n⚠️ _Puedes omitir agregar pasatiempos con el comando *#finalizar* pero ten en cuenta que si omites agregar pasatiempos no recibirás recompensas ni tiempo premium gratis y algunos datos no se registrarán porque tú registro será considerado *"Registro rápido"*._\n\n${yyr1}`,
'Toca para ver más\n' + yyr1 + '\n\nPara ver más pasatiempo revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Segunda lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*\n\n_Si quieres que este un pasatiempo que no forma parte de esta lista contacta con los creadores de este bot._',
'Toca para ver más\n' + yyr2 + '\n\nPara ver más pasatiempos revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Tercera lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*',
'Toca para ver más\n' + yyr3 + '\n\nPara ver más pasatiempos revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Última lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*',
'Toca para ver más\n' + yyr4 + '\n\nMás pasatiempos próximamente...',
false
)
}
}
seleccionarPasatiempos(seleccion)
}

if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {
tiempo = user.premLimit === 1 ? 0 : 36000000 //10 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.descripcion = bio
user.age =
user.age === 0 ? sinDefinir : user.age >= 18 ? (user.age += ' Años ' + '(Persona Adulta)') : (user.age += ' Años ' + '(Persona Joven)')
user.genero =
user.genero === 0
? sinDefinir
: user.genero == 'Ocultado'
? `${user.genero} 🕶️`
: user.genero == 'Mujer'
? `${user.genero} 🚺`
: user.genero == 'Hombre'
? `${user.genero} 🚹`
: sinDefinir
user.identidad = user.identidad === 0 ? sinDefinir : user.identidad
user.pasatiempo = user.pasatiempo === 0 ? sinDefinir : user.pasatiempo
} else {
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.age =
user.age === 0 ? sinDefinir : user.age >= 18 ? (user.age += ' Años ' + '(Persona Adulta)') : (user.age += ' Años ' + '(Persona Joven)')
user.descripcion = bio
}
user.regTime = +new Date()
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
registrando = false
clearInterval(intervalId)
await conn.sendMessage(
m.chat,
{
text: `🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n
😼 *REGISTRADO POR*
❱❱ ${wm}\n
📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'REGISTRO COMPLETO' : 'REGISTRO RÁPIDO'}\n
⌛ *FECHA/HORA*
❱❱ ${user.tiempo}\n
🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}\n
✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}*\n
✨ *NOMBRE* 
❱❱ ${user.name}\n
👀 *DESCRIPCIÓN*
❱❱ ${user.descripcion}\n
⏳ *MODIFICACIÓN DE DESCRIPCIÓN*
❱❱ ${fechaBio}\n
🔢 *EDAD* 
❱❱ ${user.age}\n
${
  user.registroC === true
    ? `☘️ *GÉNERO*
❱❱ ${user.genero}\n
🌱 *ORIENTACIÓN SEXUAL*
❱❱ ${user.identidad}\n
❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}\n
${
user.premLimit === 1
? ''
: `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +10 HORAS || ${user.premiumTime - now} ms`}`
}   `
    : ''
}${user.registroC === true ? '\n🌟 *Si es su primera vez registrándose, recibirá horas premium de forma gratuita como bonificación exclusiva por su primera inscripción, puede cancelar y eliminar su registro en cualquier momento. Gracias por registrarse ✨*' : ''}\n> *Mira tú registro en este canal*\nhttps://whatsapp.com/channel/0029VatPwXw7Noa8n1Vinx3g`.trim(),
contextInfo: {
externalAdReply: {
title: wm,
body: user.name,
thumbnailUrl: pp,
sourceUrl: 'https://www.atom.bio/gatabot',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
},
{quoted: fkontak}
)
await m.reply(`${sn}`)

let chtxt =
`📑 *Tipo de registro »* ${user.registroC === true ? 'Completo' : 'Rápido'} ${userNationality ? `\n🌎 *País »* ${userNationality}` : ''}
👤 *Usuario »* ${m.pushName || 'Anónimo'}
✅ *Verificación »* ${user.name}
👀 *Descripción »* ${user.descripcion} 
⏳ *Modificación de descripción »* ${fechaBio}
🔢 *Edad »* ${user.age}${
        user.registroC === true
          ? `\n☘️ *Género »* ${user.genero}
🌱 *Orientación Sexual »* ${user.identidad}
❇️ *Pasatiempo(s) »* ${user.pasatiempo}
${user.premLimit === 1 ? '' : `🎟️ *Premium »* ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +10 HORAS || ${user.premiumTime - now} ms`}`}   `
          : ''
      }${user.registroC === true ? '\n\n> 🌟 *Si es su primera vez registrándose, recibirá horas premium de forma gratuita como bonificación exclusiva por su primera inscripción, puede cancelar y eliminar su registro en cualquier momento. Gracias por registrarse ✨*' : ''}
🐈 *Bot:* ${gt}`.trim()
await global.conn.sendMessage(
ch.ch1,
{
text: chtxt,
contextInfo: {
externalAdReply: {
title: '【 🔔 Notificación General 🔔 】',
body: '🥳 ¡Nuevo usuario registrado!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}
}
},
{quoted: null}
)
}
}
handler.command = [
'verify',
'verificar',
'register',
'registrar',
'reg',
'reg1',
'nombre',
'name',
'nombre2',
'name2',
'edad',
'age',
'edad2',
'age2',
'genero',
'género',
'gender',
'identidad',
'pasatiempo',
'hobby',
'identity',
'finalizar',
'pas2',
'pas3',
'pas4',
'pas5'
] ///^(verify|verificar|reg(ister)?)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))'🤝 Unirme a una comunidad online de jugadores',
'👉 Ver a Casey Neistat',
'👉 Ver a Drew Gooden',
'👉 Ver a DrossRotzank',
'👉 Ver a Germán Garmendia',
'👉 Ver a iJustine',
'👉 Ver a James Charles',
'👉 Ver a Jeffree Star',
'👉 Ver a Jenna Marbles',
'👉 Ver a JuegaGerman',
'👉 Ver a KSI',
'👉 Ver a Kwebbelkop',
'👉 Ver a Logan Paul',
'👉 Ver a Markiplier',
'👉 Ver a Nigahiga',
'👉 Ver a Rosanna Pansino',
"👉 Ver a Ryan's World",
'👉 Ver a Shane Dawson',
'👉 Ver a Simply Nailogical',
'👉 Ver a The Try Guys',
'👉 Ver a TheOdd1sOut',
'👉 Ver el canal de CinemaSins',
'👉 Ver el canal de David Dobrik',
'👉 Ver el canal de Dude Perfect',
'👉 Ver el canal de Good Mythical Morning',
'👉 Ver el canal de How Ridiculous',
'👉 Ver el canal de Kurtis Conner',
'👉 Ver el canal de Lilly Singh',
'👉 Ver el canal de Linus Tech Tips',
'👉 Ver el canal de Logan Paul',
'👉 Ver el canal de NigaHiga',
'👉 Ver el canal de NikkieTutorials',
'👉 Ver el canal de PewDiePie',
'👉 Ver el canal de Rhett & Link',
'👉 Ver el canal de Rosanna Pansino',
'👉 Ver el canal de Tati Westbrook',
'👉 Ver el canal de The ACE Family',
'👉 Ver el canal de The Try Guys',
'👉 Ver el canal de Troom Troom',
'👉 Ver el canal de T-Series',
'👉 Ver el canal de Vegetta777',
'📺 Ver maratones de mis series de televisión favoritas',
'📺 Ver televisión',
'📺 Ver todos los episodios de mi anime favorito en un día',
'🌎 Viajar',
'🎒 Viajar de mochilero/a',
'🌍 Viajar y explorar nuevas culturas.',
'🎈 Viajes en Globo Aerostático',
'🎮 Videojuegos de mundo abierto',
'🎮 Videojuegos de mundo abierto en línea',
'🎮 Videojuegos de supervivencia en línea',
'🎮 Videojuegos de terror',
'🎮 Videojuegos retro',
'🎻 Violonchelo',
'🫂 Visitar amigos',
'🏰 Visitar castillos',
'🏝️ Visitar playas y hacer snorkel.',
'🏛️ Visitas virtuales a museos',
'📹 Vlog',
'📹 Vlogging',
'🏐 Voleibol',
'🌍 Voluntariado Internacional',
'🚁 Vuelo en helicóptero',
'👟 Yoga',
'🧘 Yoga Acrobático',
'🧘 Yoga acuático',
'🧘 Yoga aéreo',
'🧘 Yoga caliente',
'🧘 Yoga en el Parque con la Comunidad',
'🧘 Yoga facial',
'🧘 Yoga para embarazadas',
'🧘 Yoga para niños.'
]

var emojiANumero = {
'0️⃣': '0',
'1️⃣': '1',
'2️⃣': '2',
'3️⃣': '3',
'4️⃣': '4',
'5️⃣': '5',
'6️⃣': '6',
'7️⃣': '7',
'8️⃣': '8',
'9️⃣': '9'
}
const pasatiemposMap = new Map()
function eliminarEmojis(texto) {
return texto.replace(/[^\w\s]/g, '').toLowerCase()
}
todosLosPasatiempos.forEach((pasatiempo) => {
const textoSinEmoji = eliminarEmojis(pasatiempo)
if (!pasatiemposMap.has(textoSinEmoji)) {
pasatiemposMap.set(textoSinEmoji, pasatiempo.replace(/\.$/, ''))
}
})
let todosLosPasatiemposOrdenados = Array.from(pasatiemposMap.values()).sort(function (a, b) {
const textoA = eliminarEmojis(a)
const textoB = eliminarEmojis(b)
return textoA.localeCompare(textoB)
})
function asignarPasatiempo(text) {
var numero = parseInt(text.replace(/\D/g, ''))
if (numero >= 1 && numero <= todosLosPasatiemposOrdenados.length) {
return todosLosPasatiemposOrdenados[numero - 1]
} else if (text.trim() !== '') {
var pasatiempoIngresado = text.replace(/\D/g, '')
conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*EL PASATIEMPO "${!pasatiempoIngresado ? 'CONTIENE LETRAS 🔡' : pasatiempoIngresado === undefined ? 'DE ALGUNA POSICIÓN' : pasatiempoIngresado}" QUE NO FORMA PARTE DE LA LISTA DE PASATIEMPOS*`,
fkontak,
m
)
return
}
}
let yyr1 = ''
let yyr2 = ''
let yyr3 = ''
let yyr4 = ''
let header = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┊ 🎉 ¡PASATIEMPOS DISPONIBLES!
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯\n`
yyr1 += header
yyr2 += header
yyr3 += header
yyr4 += header
//.replace(/[^\p{L}\p{N}]/gu, '') // Elimina caracteres que no sean letras o números
let primeraParte = todosLosPasatiemposOrdenados.slice(0, 100)
let segundaParte = todosLosPasatiemposOrdenados.slice(500, 1000)
let terceraParte = todosLosPasatiemposOrdenados.slice(1000, 1500)
let cuartaParte = todosLosPasatiemposOrdenados.slice(1500)

primeraParte.forEach((pasatiempo, index) => {
yyr1 += ` [ ${index + 1} ] » ${pasatiempo}\n`
})
segundaParte.forEach((pasatiempo, index) => {
yyr2 += ` [ ${index + 501} ] » ${pasatiempo}\n`
})
terceraParte.forEach((pasatiempo, index) => {
yyr3 += ` [ ${index + 1001} ] » ${pasatiempo}\n`
})
cuartaParte.forEach((pasatiempo, index) => {
yyr4 += ` [ ${index + 1501} ] » ${pasatiempo}\n`
})
let footer = '┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈'
yyr1 += footer
yyr2 += footer
yyr3 += footer
yyr4 += footer
var maximoIndice = todosLosPasatiemposOrdenados.length - 0
async function seleccionarPasatiempos(texto) {
var seleccionados = texto.split(',').map(function (item) {
return item.trim()
})

var pasatiemposSet = new Set()
for (var i = 0; i < seleccionados.length; i++) {
var pasatiempoSeleccionado = asignarPasatiempo(seleccionados[i])
if (pasatiempoSeleccionado !== undefined) {
pasatiemposSet.add(pasatiempoSeleccionado)
if (!pas1) {
pas1 = pasatiempoSeleccionado
} else if (!pas2) {
pas2 = pasatiempoSeleccionado
} else if (!pas3) {
pas3 = pasatiempoSeleccionado
} else if (!pas4) {
pas4 = pasatiempoSeleccionado
} else if (!pas5) {
pas5 = pasatiempoSeleccionado
}
}
}
var pasatiemposUnicos = Array.from(pasatiemposSet)
var resultado = pasatiemposUnicos.join(', ')
var pasatiemposSeleccionados = [pas1, pas2, pas3, pas4, pas5].filter((pasatiempo) => pasatiempo !== '')
var posicionesSet = new Set(pasatiemposSeleccionados)
if (pasatiemposUnicos.length >= 1 && pasatiemposUnicos.length <= 5) {
if (pasatiemposSeleccionados.length >= 1 && pasatiemposSeleccionados.length <= 5 && pasatiemposSeleccionados.length === posicionesSet.size) {
//console.log("Pasatiempos seleccionados:", resultado)
user.pasatiempo = resultado
global.db.data.users[m.sender]['registroC'] = true
conn.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsAvisoEG']()}*GENIAL!! SE HA AGREGADO \`${pasatiemposSeleccionados.length}/5\` PASATIEMPOS*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${user.pasatiempo === 0 ? sinDefinir : user.pasatiempo}*\n\n🌟 *PARA GUARDAR SU REGISTRO ESCRIBA:*\n\`\`\`${usedPrefix}finalizar\`\`\``
},
{quoted: fkontak}
)
//console.log("Pasatiempos por separado:", pas1, pas2, pas3, pas4, pas5)
} else {
conn.reply(
m.chat,
`${lenguajeGB['smsAvisoAG']()}*EL PASATIEMPO "${pasatiempoSeleccionado === undefined ? 'DE ALGUNA POSICIÓN' : pasatiempoSeleccionado}" YA HA SIDO SELECCIONADO*`,
fkontak,
m
)
return
}
} else {
if (text) return
await conn.sendEvent(
m.chat,
gt + ' - Primera lista de pasatiempos.',
`🌟 *SELECCIONE MÍNIMO UN PASATIEMPO Y MÁXIMO CINCO PASATIEMPOS*\n\n*Para seleccionar varios pasatiempos separé por comas (,) además puede usar números o emojis numéricos, ejemplo:*\n\n✪ *(1 pasatiempo)*\n✓ \`\`\`${usedPrefix + command} 2️⃣\`\`\`\n\n✪ *(2 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 45, 65\`\`\`\n\n✪ *(3 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 2️⃣4️⃣, 1️⃣5️⃣6️⃣, 8️⃣9️⃣\`\`\`\n\n✪ *(4 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 223, 456, 6, 4\`\`\`\n\n✪ *(5 pasatiempos)*\n✓ \`\`\`${usedPrefix + command} 56, 5️⃣1️⃣6️⃣, 345, 2️⃣4️⃣, 200\`\`\`\n\n_Si quieres que este un pasatiempo que no forma parte de esta lista contacta con los creadores de este bot._\n\n⚠️ _Puedes omitir agregar pasatiempos con el comando *#finalizar* pero ten en cuenta que si omites agregar pasatiempos no recibirás recompensas ni tiempo premium gratis y algunos datos no se registrarán porque tú registro será considerado *"Registro rápido"*._\n\n${yyr1}`,
'Toca para ver más\n' + yyr1 + '\n\nPara ver más pasatiempo revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Segunda lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*\n\n_Si quieres que este un pasatiempo que no forma parte de esta lista contacta con los creadores de este bot._',
'Toca para ver más\n' + yyr2 + '\n\nPara ver más pasatiempos revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Tercera lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*',
'Toca para ver más\n' + yyr3 + '\n\nPara ver más pasatiempos revise los otros mensajes del bot.',
false
)
await conn.sendEvent(
m.chat,
'Última lista de pasatiempos.',
'*Para ver las idicaciones para seleccionar pasatiempos, dirígete al primer mensaje del evento.*',
'Toca para ver más\n' + yyr4 + '\n\nMás pasatiempos próximamente...',
false
)
}
}
seleccionarPasatiempos(seleccion)
}

if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {
tiempo = user.premLimit === 1 ? 0 : 36000000 //10 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.descripcion = bio
user.age =
user.age === 0 ? sinDefinir : user.age >= 18 ? (user.age += ' Años ' + '(Persona Adulta)') : (user.age += ' Años ' + '(Persona Joven)')
user.genero =
user.genero === 0
? sinDefinir
: user.genero == 'Ocultado'
? `${user.genero} 🕶️`
: user.genero == 'Mujer'
? `${user.genero} 🚺`
: user.genero == 'Hombre'
? `${user.genero} 🚹`
: sinDefinir
user.identidad = user.identidad === 0 ? sinDefinir : user.identidad
user.pasatiempo = user.pasatiempo === 0 ? sinDefinir : user.pasatiempo
} else {
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.age =
user.age === 0 ? sinDefinir : user.age >= 18 ? (user.age += ' Años ' + '(Persona Adulta)') : (user.age += ' Años ' + '(Persona Joven)')
user.descripcion = bio
}
user.regTime = +new Date()
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
registrando = false
clearInterval(intervalId)
await conn.sendMessage(
m.chat,
{
text: `🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n
😼 *REGISTRADO POR*
❱❱ ${wm}\n
📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'REGISTRO COMPLETO' : 'REGISTRO RÁPIDO'}\n
⌛ *FECHA/HORA*
❱❱ ${user.tiempo}\n
🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}\n
✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}*\n
✨ *NOMBRE* 
❱❱ ${user.name}\n
👀 *DESCRIPCIÓN*
❱❱ ${user.descripcion}\n
⏳ *MODIFICACIÓN DE DESCRIPCIÓN*
❱❱ ${fechaBio}\n
🔢 *EDAD* 
❱❱ ${user.age}\n
${
  user.registroC === true
    ? `☘️ *GÉNERO*
❱❱ ${user.genero}\n
🌱 *ORIENTACIÓN SEXUAL*
❱❱ ${user.identidad}\n
❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}\n
${
user.premLimit === 1
? ''
: `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +10 HORAS || ${user.premiumTime - now} ms`}`
}   `
    : ''
}${user.registroC === true ? '\n🌟 *Si es su primera vez registrándose, recibirá horas premium de forma gratuita como bonificación exclusiva por su primera inscripción, puede cancelar y eliminar su registro en cualquier momento. Gracias por registrarse ✨*' : ''}\n> *Mira tú registro en este canal*\nhttps://whatsapp.com/channel/0029VatPwXw7Noa8n1Vinx3g`.trim(),
contextInfo: {
externalAdReply: {
title: wm,
body: user.name,
thumbnailUrl: pp,
sourceUrl: 'https://www.atom.bio/gatabot',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
},
{quoted: fkontak}
)
await m.reply(`${sn}`)

let chtxt =
`📑 *Tipo de registro »* ${user.registroC === true ? 'Completo' : 'Rápido'} ${userNationality ? `\n🌎 *País »* ${userNationality}` : ''}
👤 *Usuario »* ${m.pushName || 'Anónimo'}
✅ *Verificación »* ${user.name}
👀 *Descripción »* ${user.descripcion} 
⏳ *Modificación de descripción »* ${fechaBio}
🔢 *Edad »* ${user.age}${
        user.registroC === true
          ? `\n☘️ *Género »* ${user.genero}
🌱 *Orientación Sexual »* ${user.identidad}
❇️ *Pasatiempo(s) »* ${user.pasatiempo}
${user.premLimit === 1 ? '' : `🎟️ *Premium »* ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +10 HORAS || ${user.premiumTime - now} ms`}`}   `
          : ''
      }${user.registroC === true ? '\n\n> 🌟 *Si es su primera vez registrándose, recibirá horas premium de forma gratuita como bonificación exclusiva por su primera inscripción, puede cancelar y eliminar su registro en cualquier momento. Gracias por registrarse ✨*' : ''}
🐈 *Bot:* ${gt}`.trim()
await global.conn.sendMessage(
ch.ch1,
{
text: chtxt,
contextInfo: {
externalAdReply: {
title: '【 🔔 Notificación General 🔔 】',
body: '🥳 ¡Nuevo usuario registrado!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}
}
},
{quoted: null}
)
}
}
handler.command = [
'verify',
'verificar',
'register',
'registrar',
'reg',
'reg1',
'nombre',
'name',
'nombre2',
'name2',
'edad',
'age',
'edad2',
'age2',
'genero',
'género',
'gender',
'identidad',
'pasatiempo',
'hobby',
'identity',
'pas2',
'pas3',
'pas4',
'pas5'
] ///^(verify|verificar|reg(ister)?)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))