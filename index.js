console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')

function start() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
  
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESTART')
      p.kill()
      start()
      delete p
    }
  })
}

start()