const server = require('http').createServer()
const fs = require('fs')

const data = {someData: 'test'}

server.on('request', (req, res) => {
  console.log(req.url)
  switch (req.url) {
    case '/api':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(data))
      break;
    case '/about':
    case '/home':
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(fs.readFileSync(`.${req.url}.html`))
      break;
    case '/':
      res.writeHead(301, {'Location': '/home'})
      res.end()
      break;
    default:
      res.writeHead(404)
      res.end()
  }
})

server.listen(8000)
