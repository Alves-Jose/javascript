function maioridade(idade){
  if (idade >= 18)
    return 'Maior de Idade';
  else
    return 'Menor de idade';
}

const idade = maioridade(11);

console.log(idade);