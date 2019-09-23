const pwdFunc = require('./pwd.js')

process.stdout.write('prompt > ')

process.stdin.on('data', data => {
    pwdFunc(data)
})