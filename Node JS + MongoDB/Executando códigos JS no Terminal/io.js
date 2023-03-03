const process = require('process')

console.log('Digite seu Nome')

process.stdin.on('data', (keyboard) => {
  process.stdout.write(`Texto do usuario ${keyboard}`)
  process.exit()

})