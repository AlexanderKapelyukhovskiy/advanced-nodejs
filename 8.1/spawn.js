const {spawn} = require('child_process')


const child = spawn('find', ['.', '-type', 'f'])


child.stdout.on('data', data => {
  console.log(`child stdout:\n${data}`)
})

child.stderr.on('data', data => {
  console.log(`child stderr:\n${data}`)
})

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code}, signal ${signal}`)
})

child.on('disconnect', ()=>{
  console.log('disconnect');
})

child.on('error', ()=>{
  console.log('error');
})

child.on('message', ()=>{
  console.log('message');
})

child.on('close', ()=>{
  console.log('message');
})

//child.stdin, child.stdout, child.stderr
