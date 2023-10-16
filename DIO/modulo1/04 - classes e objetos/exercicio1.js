class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoTotal() {
        const valorCombustivel = 5.00;
        const distanciakm = 100;
        const litros_consumidos = distanciakm / gastoMedioPorKm;
        console.log(litros_consumidos);
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12);



