const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname, 'files1')

const files = fs.readdirSync(dirname)
const ms1Day = 24*60*60*1000

files.forEach(file => {
  const filePath = path.join(dirname, file)
  fs.stat(filePath, (err, status) => {
    if(err) {
      throw err
    }

    if(Date.now() - status.mtime.getTime() > 7*ms1Day) {
      fs.unlink(filePath, err => {
        if(err) {
          throw err
        }
        console.log(filePath, 'deleted');
      })
    }
  })
})
