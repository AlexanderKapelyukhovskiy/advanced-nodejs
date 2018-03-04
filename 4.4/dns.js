const dns = require('dns')
// dns.lookup('pluralsigh.com', (err, address) => {
//   console.log(address)
// })
// dns.resolve4('pluralsigh.com', (err, address) => {
//   console.log(address)
// })
// dns.resolve('pluralsigh.com', (err, address) => {
//   console.log(address)
// })
//'95.211.219.66'
dns.reverse('35.161.75.227', (err, hostnames) => {
  console.log(hostnames)
})
