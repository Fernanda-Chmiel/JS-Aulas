const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira o seu salário: ", (salario) => {
  let aumento = (parseFloat(salario) + parseFloat(salario) * 0.15);
  console.log(`Seu salário com aumento de 15% será de: R$${aumento}`);

  rl.close;
});