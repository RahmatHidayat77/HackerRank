const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input a? ", (a) => {
  let first = parseInt(a)

  rl.question("Input b? ", (b) => {
    let second = parseInt(b)
    console.log(first+second);
    rl.close();
  });
});
