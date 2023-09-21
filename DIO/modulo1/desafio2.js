//faça um programa para calcular o valor de uma viagem.

//você terá 5 variáveis. Sendo elas:
//preço álcool 
//preço gasolina
//tipo de combustivel que está no carro;
//Gasto médiio de combustível do carro por km;
//distância de km da viagem;
//imprima no console o valor que será gasto para realizar esta viagem;

const preco_etanol= 5.79;
const preco_gasolina = 6.66;
const tipoCombustivel = 'Gasolina'; 
const gasto_comb = 10;
const distanciakm = 100;

const litros_consumidos = distanciakm / gasto_comb;

if (tipoCombustivel === 'Etanol'){
    const total_gasto = litros_consumidos * preco_etanol;
    console.log(total_gasto.toFixed(2));

} else {
    const total_gasto = litros_consumidos * preco_gasolina;
    console.log(total_gasto.toFixed(2));
}
