const a = {
    nome : 'Luiz',
    sobrenome: 'Ótavio'
};

const b = {...a};

a.nome = 'João';
console.log(b);
console.log(a);
