const http = require('http')

console.log(1);
//req: http.ClientRequest
const req = http.get(
  'http://www.google.com',
  res => {
    //res: http.IncomingMessage
    console.log(res.statusCode)
    console.log(res.headers)

    res.on('data', data => {
      //console.log(data.toString())
    })
})
console.log(2);
req.on('error', err => console.log(err))
console.log(3);
//req.end()
console.log(req.agent); //http.Agent
