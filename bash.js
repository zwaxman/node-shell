const pwdFunc = require("./pwd.js");
const lsFunc = require("./ls.js");
const catFunc = require("./cat.js");
const curlFunc = require("./curl.js")

const done = function(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ')
}

process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const str = data
    .toString()
    .trim()
    .split(" ");
  const cmd = str[0];
  const arg = str[1];

  if (cmd === "pwd") {
    pwdFunc(done);
  } else if (cmd === "ls") {
    lsFunc(done);
  } else if (cmd === "cat") {
    catFunc(arg,done);
  } else if (cmd === 'curl') {
    curlFunc(arg, done);
  }
});

