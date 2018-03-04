const {spawn} = require('child_process')

// const child = spawn('find', ['.', '-type', 'f'],{
//   stdio: 'inherit'
// })

//shell option
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// })

//Different cwd
// const child = spawn('find . -type f |  wc -l', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: 'c:/Users/alkapa/Downloads'
// })

const child = spawn('echo $ANSWER', {//doesn't work in Win BASH
  stdio: 'inherit',
  shell: true,
  env: {ANSWER: 42}
})
