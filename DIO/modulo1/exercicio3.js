/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento

Utilize os códigos a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta, sem juros;
- Acima de duas vezes, preço normal da etiqueta, mais 10% de juros;
*/

/*const produto = 15.00;

const debito = 'Debito';
const dinheiro = 'Dinheiro';
const pix = 'Pix';
const duasvezes = 'Duas vezes'

const descDebito = produto * (10 / 100);
const descDinheiro = produto * (15 / 100);
const descPix = produto * (15 / 100);
const descDuasvezes = produto;
const acimaDuasvezes = produto */

const precoEtiqueta = 100;
const formaPagamento = 1;

if (formaPagamento === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (formaPagamento === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (formaPagamento === 3) {
  console.log(precoEtiqueta);
} else {
    console.log(' ')
}
