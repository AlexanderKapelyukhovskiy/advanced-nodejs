//server: http.Server
const server = require('http').createServer();

server.on('request', (req, res) => {
  //req: http.IncommintMessage
  //res: http.ServerResponse
  res.writeHead(200, {'content-type': 'text/plain'})
  res.write('Hello world\n')
})

server.listen(8000)
