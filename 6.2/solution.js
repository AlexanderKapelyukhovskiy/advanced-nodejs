const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname, 'files')

const files = fs.readdirSync(dirname)

files.forEach(file => {
  const filePath = path.join(dirname, file)
  fs.stat(filePath, (err, status) => {
    if(err) {
      throw err
    }
    const halfSize = Math.round(status.size/2)
    console.log(filePath, halfSize);
    fs.truncate(filePath, halfSize, err => {
      if(err) {
        throw err
      }
    })
  })
})
