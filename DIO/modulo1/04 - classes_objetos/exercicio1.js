class Car{
    brand;
    color;
    spentkm;

    constructor(brand, color, spentkm){
        this.brand = brand;
        this.color = color;
        this.spentkm = spentkm;
    }

    route(distanceKm, price){
        return distanceKm * this.spentkm * price;
    }
}

const uno = new Car('Fiat', 'Black', 1/12);

console.log(uno.route(70, 5));

const palio = new Car('Fiat', 'Silver', 1/14);

console.log(palio.route(70, 5));