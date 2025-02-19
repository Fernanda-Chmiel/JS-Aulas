const readline = require("readline"); // importa o readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {
  rl.question("Escreva seu salário: ", (salario) => {
    console.log(`Olá, ${nome}! Você recebe on salário de ${salario}.`);

    rl.close;
  });
});
