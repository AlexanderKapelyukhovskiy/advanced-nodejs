const fs = require('fs')
const EventEmitter = require('events')

class WithTime extends EventEmitter {
  execute(asyncFunct, ...args) {
    console.time('execute')
    this.emit('begin')
    asyncFunct(...args, (err, data) => {
      if (err) {
        return this.emit('error', err)
      }
      this.emit('data', data)
      console.timeEnd('execute')
      this.emit('end')
    })
  }
}

const withTime = new WithTime()


withTime.on('data', data => {
  console.log(`Length: ${data.length}`)
})

withTime.prependListener('data', data => {
  console.log(`Characters: ${data.toString().length}`)
})

//withTime.on('error', console.error)
process.once('uncaughtException', err => {
  console.error(err)
  process.exit(1)
})

//他妈的

//withTime.execute(fs.readFile, '')
withTime.execute(fs.readFile, __filename)
