const velocidade = 81; // informar a velocidade
const multa = (velocidade - 80) * 5;

if (velocidade <= 80) {
  console.log(`Você está dentro do limite de velocidade.`);
} else {
  console.log(`Você ultrapassou o limite! Sua multa será de R$ ${multa}!`);
}
