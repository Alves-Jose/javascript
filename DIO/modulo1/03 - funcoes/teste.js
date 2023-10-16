/*function saudacao(nome){
    console.log('Olá, ' + nome)
}

saudacao('José Marcos');

function adicao(n1, n2){
    return n1 + n2;
}

const soma = adicao(4, 1);
console.log(soma);*/

function parimpar(n){
    if (n % 2 == 0)
    return 'Par';
    else
    return 'Impar';
}

const resp = parimpar(11);

console.log(resp);