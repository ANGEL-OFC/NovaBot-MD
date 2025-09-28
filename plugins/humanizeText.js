import axios from 'axios' import cheerio from 'cheerio' // incluido por compatibilidad con tu estilo; no es necesario aquí import FormData from 'form-data' import fs from 'fs' import path from 'path' import { createCanvas, loadImage } from 'canvas'

const split = '|'

const handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => { try { // Validación básica de uso if (!effect) throw ( ⚠️ USAR EL COMANDO ASÍ: \n${usedPrefix + command} Humanize-On-Image texto\n\nEjemplo:\n${usedPrefix + command} Humanize-On-Image Hola, hoy aprendí algo nuevo)

// Extraer texto (igual que en tu código original)
let text = (txt || '').replace(new RegExp(effect, 'gi'), '').trimStart()
if (!text) throw '❗️ Falta el texto a humanizar. Usa: ' + usedPrefix + command + ' ' + effect + ' Tu texto'

if (text.includes(split)) text = text.split(split).map(t => t.trim())
else text = [text.trim()]

// Buscar imagen en el mensaje (o en el mensaje citado)
const bufferImage = await getImageBuffer(m, conn)
if (!bufferImage) return await conn.sendMessage(m.chat, { text: '⚠️ Debes enviar o citar una imagen junto con el comando (la imagen será el fondo).' }, { quoted: m })

// 1) Llamada a OpenAI (Chat completions) para "humanizar" el texto
const openaiKey = process.env.OPENAI_API_KEY || ''
if (!openaiKey) return await conn.sendMessage(m.chat, { text: '❌ Falta la variable de entorno OPENAI_API_KEY' }, { quoted: m })

const prompt = `Reescribe el siguiente texto de forma natural, como si lo escribiera una persona: \n\n"${text[0].slice(0, 2000)}"` // limitar por seguridad

const openaiResp = await axios.post(
  'https://api.openai.com/v1/chat/completions',
  {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Eres un asistente que reescribe textos para que suenen naturales y humanos.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 512,
    temperature: 0.8
  },
  {
    headers: {
      'Authorization': `Bearer ${openaiKey}`,
      'Content-Type': 'application/json'
    }
  }
)

const textoHumano = openaiResp.data?.choices?.[0]?.message?.content?.trim() || text[0]

// 2) Generar imagen con canvas
const img = await loadImage(bufferImage)
const canvas = createCanvas(img.width, img.height)
const ctx = canvas.getContext('2d')

// Dibuja fondo
ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

// Opcional: permitir posición usando segundo argumento separado por '|'
const position = (text[1] || 'center').toLowerCase()

// Configura tipografía dinámica
const maxWidth = Math.floor(canvas.width * 0.8)
let fontSize = Math.floor(canvas.width / 18)
if (fontSize < 18) fontSize = 18

ctx.textAlign = 'center'
ctx.textBaseline = 'middle'

// Función para envolver texto
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width
    if (testWidth > maxWidth && n > 0) {
      lines.push(line.trim())
      line = words[n] + ' '
    } else {
      line = testLine
    }
  }
  lines.push(line.trim())
  return lines
}

// Ajustar fontSize hasta que las lineas no excedan cierto número re-intentos
let lines = []
for (let i = 0; i < 8; i++) { // intenta reducir hasta 8 veces
  ctx.font = `${fontSize}px sans-serif`
  lines = wrapText(ctx, textoHumano, maxWidth)
  // Si la altura total cabe en la imagen, sal
  const lineHeight = Math.floor(fontSize * 1.25)
  if ((lines.length * lineHeight) < (canvas.height * 0.8)) break
  fontSize = Math.max(16, Math.floor(fontSize * 0.9))
}

// Calcula posición Y inicial según la posición deseada
const lineHeight = Math.floor(fontSize * 1.25)
let yStart
switch (position) {
  case 'top':
    yStart = Math.floor(canvas.height * 0.12) + lineHeight / 2
    break
  case 'bottom':
    yStart = canvas.height - Math.floor(canvas.height * 0.12) - ((lines.length - 1) * lineHeight)
    break
  case 'left':
  case 'top-left':
  case 'bottom-left':
    yStart = Math.floor(canvas.height / 2) - Math.floor((lines.length - 1) * lineHeight / 2)
    break
  case 'right':
  case 'top-right':
  case 'bottom-right':
    yStart = Math.floor(canvas.height / 2) - Math.floor((lines.length - 1) * lineHeight / 2)
    break
  default:
    // center
    yStart = Math.floor(canvas.height / 2) - Math.floor((lines.length - 1) * lineHeight / 2)
}

// Dibujo con contorno para legibilidad
ctx.lineJoin = 'round'
ctx.strokeStyle = 'rgba(0,0,0,0.8)'
ctx.fillStyle = 'white'
ctx.lineWidth = Math.max(2, Math.floor(fontSize * 0.12))
ctx.font = `${fontSize}px sans-serif`

// Coordenada X
let xPos = Math.floor(canvas.width / 2)
if (position.endsWith('left')) xPos = Math.floor(canvas.width * 0.15)
if (position.endsWith('right')) xPos = Math.floor(canvas.width * 0.85)

// Dibujar cada linea
for (let i = 0; i < lines.length; i++) {
  const y = yStart + (i * lineHeight)
  ctx.strokeText(lines[i], xPos, y)
  ctx.fillText(lines[i], xPos, y)
}

// Guardar salida temporal
const outDir = path.join(process.cwd(), 'media')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, `humanize_${Date.now()}.png`)
fs.writeFileSync(outPath, canvas.toBuffer('image/png'))

// Enviar resultado (compatibilidad con tu forma de enviar en el ejemplo que pegaste)
await conn.sendMessage(m.chat, { image: { url: outPath }, caption: `✅ AQUÍ ESTÁ TU IMAGEN CON EL TEXTO HUMANIZADO` }, { quoted: m })

// Limpieza
try { fs.unlinkSync(outPath) } catch (e) { }

} catch (err) { console.error(err) // Mensaje de error genérico (adapta a lenguajeGB si lo usas) await conn.sendMessage(m.chat, { text: '❌ Error al procesar. Revisa que mandaste texto y una imagen, y que tu OPENAI_API_KEY esté configurada.' }, { quoted: m }) } }

handler.help = ['humanize-on-image'] handler.tags = ['tools'] handler.command = /^(humanize|humanizar|humanize-on-image)$/i handler.limit = 1 handler.register = true

export default handler

// ----------------- // Helpers async function getImageBuffer(m, conn) { // Intenta varias formas de descargar la imagen para compatibilidad con distintos templates try { // Si hay mensaje citado con imagen const quoted = m.quoted || m.msg?.contextInfo?.quotedMessage const maybeImageMessage = quoted?.message || m.message

// Si el framework tiene algún método de descarga (varía entre bots), probamos varios nombres
const downloadFns = ['downloadAndSaveMediaMessage', 'downloadMediaMessage', 'downloadM', 'downloadMedia']
for (const name of downloadFns) {
  if (typeof conn?.[name] === 'function') {
    try {
      // Muchos métodos aceptan el message y un tipo 'buffer'
      const res = await conn[name](quoted || m, 'buffer')
      if (Buffer.isBuffer(res)) return res
      // si el método devolvió un path
      if (typeof res === 'string' && fs.existsSync(res)) return fs.readFileSync(res)
    } catch (e) {
      // continua a la siguiente opción
    }
  }
}

// Fallback: intentar obtener URL directo del objeto de mensaje (si existe)
const imageMessage = quoted?.message?.imageMessage || m.message?.imageMessage
if (imageMessage) {
  const url = imageMessage.url || imageMessage.directPath || imageMessage.downloadUrl
  if (url) {
    const r = await axios.get(url, { responseType: 'arraybuffer' })
    return Buffer.from(r.data)
  }
}

// No se pudo obtener la imagen
return null

} catch (e) { console.error('getImageBuffer error', e) return null } }

