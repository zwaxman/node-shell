const fs = require('fs')

const catFunc = function(arg){
    fs.readFile(arg, 'utf8', function(error, output){
        if (error) {
            throw error;
        } else {
            process.stdout.write(output);
        }
        process.stdout.write('\nprompt > ')
    });
}

module.exports = catFunc;