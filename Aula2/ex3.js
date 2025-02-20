const datadenasc = 2024;
const idade = 2025 - datadenasc;
const falta = 18 - idade;
const sobra = idade - 18;

if (idade < 18) {
  console.log(`Faltam ${falta} anos para seu alistamento`);
} else if (idade > 18) {
  console.log(`Passaram ${sobra} do seu alistamento`);
} else {
  console.log(`Você está no seu ano de alistamento!`);
}
