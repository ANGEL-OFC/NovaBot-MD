const fs = require('fs');

module.exports = async (msg, { conn, args }) => { 
  try { 
    if (args.length < 2) { 
      await conn.sendMessage(msg.key.remoteJid, { 
        text: `⚠️ *Uso incorrecto.*\nEjemplo: \`${global.prefix}rpg Russell 26\`` 
      }, { quoted: msg });
      return; 
    }

    let nombreUsuario = args[0]; 
    let edadUsuario = parseInt(args[1]); 
    let userId = msg.key.participant || msg.key.remoteJid; 

    if (isNaN(edadUsuario) || edadUsuario <= 0) { 
      await conn.sendMessage(msg.key.remoteJid, { 
        text: "❌ *La edad debe ser un número válido mayor que 0.*" 
      }, { quoted: msg });
      return; 
    }

    const rpgFile = "./rpg.json"; 
    let rpgData = fs.existsSync(rpgFile) 
      ? JSON.parse(fs.readFileSync(rpgFile, "utf-8")) 
      : { usuarios: {} }; 

    if (rpgData.usuarios[userId]) { 
      await conn.sendMessage(msg.key.remoteJid, { 
        text: `⚠️ *Ya estás registrado en el gremio Azura Ultra.*\n\n📜 Usa \`${global.prefix}menurpg\` para ver tus opciones.` 
      }, { quoted: msg });
      return; 
    }

    await conn.sendMessage(msg.key.remoteJid, { react: { text: "⏳", key: msg.key } }); 
    let registroMensaje = await conn.sendMessage(msg.key.remoteJid, { text: `📝 *Registrando en el Gremio Azura Ultra...*` }, { quoted: msg }); 

    await new Promise(resolve => setTimeout(resolve, 1500)); 
    await conn.sendMessage(msg.key.remoteJid, { edit: registroMensaje.key, text: `📜 *Nombre:* ${nombreUsuario}\n🎂 *Edad:* ${edadUsuario}\n\n⏳ *Procesando...*` }); 
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    await conn.sendMessage(msg.key.remoteJid, { edit: registroMensaje.key, text: `🔍 *Buscando rango y habilidades...*` }); 
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    const habilidadesDisponibles = ["⚔️ Espadachín", "🛡️ Defensor", "🔥 Mago", "🏹 Arquero", "🌀 Sanador", "⚡ Ninja", "💀 Asesino"]; 
    const rangosDisponibles = ["🌟 Novato", "⚔️ Guerrero", "🔥 Maestro", "👑 Élite", "🌀 Legendario"]; 

    let habilidad1 = habilidadesDisponibles[Math.floor(Math.random() * habilidadesDisponibles.length)]; 
    let habilidad2 = habilidadesDisponibles[Math.floor(Math.random() * habilidadesDisponibles.length)]; 
    let rango = "🌟 Novato"; 

    let mascotasTienda = rpgData.tiendaMascotas || []; 
    let mascotaAleatoria = mascotasTienda.length > 0 ? mascotasTienda[Math.floor(Math.random() * mascotasTienda.length)] : null; 
    let nuevaMascota = null; 

    if (mascotaAleatoria) { 
      nuevaMascota = { 
        nombre: mascotaAleatoria.nombre, 
        imagen: mascotaAleatoria.imagen, 
        rango: mascotaAleatoria.rango, // ✅ Ahora guarda correctamente el rango de la mascota
        nivel: 1, 
        vida: 100, 
        experiencia: 0, 
        habilidades: { 
          [Object.keys(mascotaAleatoria.habilidades)[0]]: { nivel: 1 }, 
          [Object.keys(mascotaAleatoria.habilidades)[1]]: { nivel: 1 } 
        } 
      }; 
    }

    let nuevoUsuario = { 
      id: userId, 
      nombre: nombreUsuario, 
      edad: edadUsuario, 
      nivel: 1, 
      experiencia: 0, 
      rango: rango, 
      vida: 100, 
      habilidades: {  
        [habilidad1]: { nivel: 1 }, 
        [habilidad2]: { nivel: 1 } 
      }, 
      diamantes: 0, 
      diamantesGuardados: 0, 
      mascotas: nuevaMascota ? [nuevaMascota] : [] 
    };

    rpgData.usuarios[userId] = nuevoUsuario; 
    fs.writeFileSync(rpgFile, JSON.stringify(rpgData, null, 2)); 

    let habilidadesMascota = ""; 
    if (nuevaMascota) { 
      habilidadesMascota = `🔹 *Habilidades:*  
   🌀 ${Object.keys(nuevaMascota.habilidades)[0]} (Nivel 1)  
   🔥 ${Object.keys(nuevaMascota.habilidades)[1]} (Nivel 1)`; 
    }

    let mensajeFinal = `🎉 *¡Registro Completado!* 🎉
        
🌟 *Jugador:* ${nombreUsuario}  
🎂 *Edad:* ${edadUsuario} años  
⚔️ *Rango Inicial:* ${rango}  
🎚️ *Nivel:* 1  
❤️ *Vida:* 100 HP  
✨ *Experiencia:* 0 / 1000 XP  
🛠️ *Habilidades:*  
   ✨ ${habilidad1} (Nivel 1)  
   ✨ ${habilidad2} (Nivel 1)  

🐾 *Mascota Inicial:* ${nuevaMascota ? `🦴 ${nuevaMascota.nombre}` : "❌ Ninguna (No hay en la tienda)"}  
   📊 *Rango:* ${nuevaMascota ? nuevaMascota.rango : "❌"}  
   🎚️ *Nivel:* ${nuevaMascota ? nuevaMascota.nivel : "❌"}  
   ❤️ *Vida:* ${nuevaMascota ? nuevaMascota.vida : "❌"}  
   ✨ *Experiencia:* 0 / 500 XP  
   ${habilidadesMascota}  

💎 *Diamantes:* 0  
🏦 *Diamantes en Gremio:* 0  

📜 *Comandos Básicos:*  
🔹 Usa *${global.prefix}vermascotas* para ver tu mascota actual y las que compres.  
🔹 Usa *${global.prefix}tiendamascotas* para ver mascotas disponibles.  
🔹 Usa *${global.prefix}tiendaper* para ver personajes de anime disponibles.  
🔹 Usa estos comandos para subir de nivel y ganar diamantes:  
   *${global.prefix}minar*, *${global.prefix}picar*, *${global.prefix}crime*, *${global.prefix}work*,  
   *${global.prefix}claim*, *${global.prefix}cofre*, *${global.prefix}minar2*, *${global.prefix}robar*  

🚀 ¡Prepárate para la aventura en *Azura Ultra*! 🏆`;

    await conn.sendMessage(msg.key.remoteJid, { edit: registroMensaje.key, text: "✅ *¡Registro completado!* Generando tu tarjeta de jugador..." }); 
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    await conn.sendMessage(msg.key.remoteJid, {  
      video: { url: "https://cdn.dorratz.com/files/1740560637895.mp4" },  
      gifPlayback: true,  
      caption: mensajeFinal  
    }, { quoted: msg }); 

    await conn.sendMessage(msg.key.remoteJid, { react: { text: "🎮", key: msg.key } }); 

  } catch (error) { 
    console.error("❌ Error en el comando .rpg:", error); 
    await conn.sendMessage(msg.key.remoteJid, { text: "❌ *Ocurrió un error al registrarte en el gremio. Inténtalo de nuevo.*" }, { quoted: msg }); 
    await conn.sendMessage(msg.key.remoteJid, { react: { text: "❌", key: msg.key } }); 
  } 
};

module.exports.command = ['rpg'];