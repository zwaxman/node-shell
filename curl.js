const request = require('request')

const curlFunc = function(URL, done) {
    request(URL, function(err, response, body) {
        done(body)
        process.stdout.write('\nprompt > ')
    })
}

module.exports = curlFunc