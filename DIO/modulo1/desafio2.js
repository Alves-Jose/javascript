//faça um programa para calcular o valor de uma viagem.

//você terá 3 variáveis. Sendo elas:
//preço álcool 
//preço gasolina
//Gasto médiio de combustível do carro por km;
//distância de km da viagem;
//imprima no console o valor que será gasto para realizar esta viagem;

const preco_combustivel = 5.14;
const gasto_comb = 5;
const dist = 200;

const litros_consumidos = dist / gasto_comb;
const total_gasto = litros_consumidos * preco_combustivel;

console.log(total_gasto.toFixed(2));