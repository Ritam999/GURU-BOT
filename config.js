import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['918822912149','Ritam Senpai', true],
  ] 

global.pairingNumber = "14404905478" 

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.allowed = ['917605902011', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'Gojo Satoru'
global.premium = 'true'
global.packname = 'Ri' 
global.author = '@ri' 
global.menuvid = 'https://youtu.be/7e95JyEkkEY?si=_9_c021qmHUs1WgJ'
global.igfg = 'https://www.instagram.com/debanilritamborgohain/\n' 
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
  // ... (Your existing code)

// Define a global object to store last command timestamps
global.commandCooldowns = {};

// Function to check if a command is on cooldown
function isCommandOnCooldown(command, userId) {
  const key = `${command}_${userId}`;
  const cooldownTimeInSeconds = 5; // Set your desired cooldown time in seconds

  if (global.commandCooldowns[key]) {
    const currentTime = Date.now();
    const cooldownExpiration = global.commandCooldowns[key] + cooldownTimeInSeconds * 1000;

    return currentTime < cooldownExpiration;
  }

  return false;
}

// Function to set a cooldown for a command
function setCommandCooldown(command, userId) {
  const key = `${command}_${userId}`;
  global.commandCooldowns[key] = Date.now();
}

// Example of using the cooldown mechanism in your bot logic
// Replace this with your actual bot command handling logic
function handleBotCommand(command, userId) {
  if (isCommandOnCooldown(command, userId)) {
    console.log('Command is on cooldown. Please wait.');
  } else {
    // Your command logic here
    console.log(`Executing command: ${command}`);

    // Set cooldown for the command
    setCommandCooldown(command, userId);
  }
}

// Example usage:
const userId = '123456789';
const command = 'yourBotCommand';
handleBotCommand(command, userId);
})
