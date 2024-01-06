
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const jose = new Pessoa();
jose.nome = 'Jose Marcos P Alves';
jose.idade = 23;

const beatriz = new Pessoa();
beatriz.nome = 'Beatriz';
beatriz.idade = '22';

console.log(beatriz);
console.log(jose);

beatriz.descrever();
jose.descrever();