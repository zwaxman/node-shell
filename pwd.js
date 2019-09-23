const pwdFunc = function(data) {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(__dirname);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ')
}

module.exports = pwdFunc
