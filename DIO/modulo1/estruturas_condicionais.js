const numero = 5;

const numerodivisivelpor5 = numero % 5 === 0;

if (numero === 0) {
    console.log("Número inválido");
} 
else if (numero === 5) {
  console.log("Número inválido");
}
else if (numerodivisivelpor5) {
    console.log("Sim");
} else {
    console.log("Não");
}
