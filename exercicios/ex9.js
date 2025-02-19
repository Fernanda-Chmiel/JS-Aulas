const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Informe os dias trabalhados: `, (dias) => {
  let salario = parseFloat(dias) * 200; // 8 horas * R$25 = um dia de trabalho
  console.log(`Você ganha R$${salario} por mês.`);

  rl.close;
});