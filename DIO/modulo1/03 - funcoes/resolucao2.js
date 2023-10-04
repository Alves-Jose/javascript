function EscrevaMeuNome(nome) {
  return "Seu nome é: " + nome;
}


function verificaridade(idade) {
  if (idade >= 18) {
    console.log(EscrevaMeuNome('José Marcos ') + "e você é maior de idade");
  } else {
    console.log(EscrevaMeuNome('José Marcos ') + "e você é menor de idade");
  }
}

verificaridade(11);
