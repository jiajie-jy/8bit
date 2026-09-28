const fs = require('fs');
const path = require('path');

const endpoint = '';
if (endpoint && !/^wss:\/\//i.test(endpoint)) {
  throw new Error('GAME_WS_URL debe ser una URL wss:// del servidor del juego.');
}
const target = path.join(__dirname, '..', 'public', 'config.js');
fs.writeFileSync(target, `window.GAME_WS_URL = ${JSON.stringify(endpoint)};\n`);
console.log(endpoint ? 'Frontend configurado con servidor WebSocket.' : 'GAME_WS_URL vacía; se usará el mismo host.');
