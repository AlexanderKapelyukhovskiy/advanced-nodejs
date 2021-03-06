const http = require('http')
const pid = process.pid

http.createServer((req, res) => {
  for(let i=0; i < 1e7; i++);
  res.end(`Handled by process ${pid}`)
}).listen(8000, () => {
  console.log(`Started process ${pid}`)
})

setTimeout(()=> {
  process.exit(1)
}, 5000 + Math.random() * 10000)
