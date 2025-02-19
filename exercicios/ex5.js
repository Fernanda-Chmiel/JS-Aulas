const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira sua nota: ", (valor1) => {
  rl.question("Insira sua nota: ", (valor2) => {
    let media = (parseFloat(valor1) + parseFloat(valor2)) / 2;
    console.log(`A média é: ${media}`);

    rl.close;
  });
});
