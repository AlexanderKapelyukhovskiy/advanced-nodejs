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
withTime.on('begin', () => console.log('About to excute'))
withTime.on('end', () => console.log('Done with excute'))
withTime.on('data', (data) => console.log(data))

withTime.execute(fs.readFile, __filename)
