class Person{
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    imc(weight, height){
      return  this.weight / (this.height * this.height);
    }
}

const jose = new Person('José', 70, 1.75);

