const nome = "Fernanda";
const sexo = "Feminino";
const valorcompra = 100;
const decfem = valorcompra + valorcompra * -0.13;
const decmac = valorcompra + valorcompra * -0.05;

if (sexo == "Feminino") {
  console.log(`O valor da sua compra com desconto será de R$${decfem}`);
} else if (sexo == "Masculino") {
  console.log(`O valor da sua compra com desconto será de R$${decmac}`);
}
