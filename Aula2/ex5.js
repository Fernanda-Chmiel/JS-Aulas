const distancia = 200;
const desc1 = distancia * 0.5;
const desc2 = distancia * 0.45;

if (distancia <= 200) {
  console.log(`Sua viagem sairá por R$${desc1}`);
} else {
  console.log(`Sua viagem sairá por R${desc2}`);
}
