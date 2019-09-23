const fs = require('fs')

const lsFunc = function(done) {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        }
        else {
            done(files.join('\n'))
        }
    })
}

module.exports = lsFunc;