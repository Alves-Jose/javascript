function calcularidade(ano_atual, data_nasc) {
  return ano_atual - data_nasc;
}


function maioridade(idade) {}
if (calcularidade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}
const data_nasc = 2000;
const ano_atual = 2023;
const idade = calcularidade(ano_atual, data_nasc);
console.log(calcularidade);
