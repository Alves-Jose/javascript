/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento

Utilize os códigos a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta, sem juros;
- Acima de duas vezes, preço normal da etiqueta, mais 10% de juros;
*/

const precoEtiqueta = 100;


function condicaoPagamento(pagamento){

    if (pagamento === 1) {
       return (precoEtiqueta - precoEtiqueta * 0.1);


      } else if (pagamento === 2) {
        return (precoEtiqueta - precoEtiqueta * 0.15);


      } else if (pagamento === 3) {
        return (precoEtiqueta);


      } else if (pagamento == 4) {
          return (precoEtiqueta + (precoEtiqueta * 0.1));
      }
}

const pagamento = condicaoPagamento(4);

console.log(pagamento);