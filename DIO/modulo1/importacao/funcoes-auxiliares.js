const numbers = [5, 50, 10, 98, 23];
let = i = 0;

function gets() {
  const value = numbers[i];
  i = i + 1;
  return value;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
