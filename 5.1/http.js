const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.write('Hello world\n')

  setTimeout(()=>{
    res.write('Hello world1\n')
  }, 5000)
  setTimeout(()=>{
    res.write('Hello world2\n')
    //res.end()
  }, 5000)
})

server.listen(8000)
