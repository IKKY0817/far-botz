let fs = require('fs')
let chalk = require('chalk')
global.owner = ['6281906054234', '6281906054234'] // Nomor Owner
global.autoread = true // false untuk menonaktifkan autoread, true untuk menyalakan autoread
global.selfmode = false // false = Mode Publik, true = Mode Self
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = '*FAR-BOTz*' // Teks Untuk Fake Reply
global.mess = {
group : {
welcome : `- 𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄  𝐅 𝐄 𝐀 𝐓 𝐔 𝐑 𝐄 -\n\n𝘚𝘦𝘭𝘢𝘮𝘢𝘵 𝘋𝘢𝘵𝘢𝘯𝘨 @user 👋🏻\n𝘥𝘪 𝘎𝘳𝘰𝘶𝘱: @subject\n𝗡𝗢𝗧𝗘: Semoga Betah ya di Group Ini!`, // Teks Untuk Welcome
bye : `- 𝐆 𝐎 𝐎 𝐃 𝐁 𝐘 𝐄  𝐅 𝐄 𝐀 𝐓 𝐔 𝐑 𝐄 -\n\n𝘚𝘦𝘭𝘢𝘮𝘢𝘵 𝘑𝘢𝘭𝘢𝘯 @user\n𝗡𝗢𝗧𝗘: Semoga ini Jalan Terbaikmu Meninggalkan Group`, // Teks Untuk Bye
promote: '𝐏 𝐑 𝐎 𝐌 𝐎 𝐓 𝐄 - 𝐃 𝐄 𝐓 𝐄 𝐂 𝐓 𝐎 𝐑\n @user Sekarang adalah Admin!', // Teks Untuk Detect Promote
demote: '𝐃 𝐄 𝐌 𝐎 𝐓 𝐄 - 𝐃 𝐄 𝐓 𝐄 𝐂 𝐓 𝐎 𝐑\n @user Sekarang bukan Admin!' // Teks Untuk Detect Demote
},
error : '[ ! ] Maaf, telah Terjadi kesalahan dalam System BOTz!', // Error
success: '[ ✓ ] Mantap! Permintaan Anda telah Sukses kami Jalankan...' // Sukses
}
global.server = false // true = Manyalakan server Localhost, false = menonaktifkan server Localhost
global.prefix = '.' // Skip, Ga Terlalu Berguna
global.author = '❤️' // Nama Author Sticker
global.packname = 'FarrellAR' // Nama Packname Sticker


// LIST APIKEY

global.APIs = { // API Prefix
  nrtm: 'https://nurutomo.herokuapp.com',
  zeks: 'https://api.zeks.me',
  mel: 'https://melcanz.com'
}

global.APIKeys = { // APIKey Here
  'https://api.zeks.me': 'rikkabotwa', // Free Ampikey :v
  'https://melcanz.com': '22N2T9eK', // Buy Apikey On https://wa.me/6287755080455 Or Register On https://melcanz.com
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
