const request = require('request')

const curlFunc = function(URL) {
    request(URL, function(err, response, body) {
        process.stdout.write(body)
        process.stdout.write('\nprompt > ')
    })
}

module.exports = curlFunc