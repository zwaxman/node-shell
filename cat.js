const fs = require('fs')

const catFunc = function(arg, done){
    fs.readFile(arg, 'utf8', function(error, output){
        if (error) {
            throw error;
        } else {
            done(output);
        }
    });
}

module.exports = catFunc;