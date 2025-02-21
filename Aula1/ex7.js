const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira um valor em R$: ", (valor) => {
  let dolar = parseFloat(valor) / 5.60;
  console.log(`Você pode comprar US$ ${dolar}`);

  rl.close;
});

