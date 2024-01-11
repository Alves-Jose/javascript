class Person {
  name;
  weight;
  height;

  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  imc(weight, height) {
    return this.weight / (this.height * this.height);
  }

  classIMC() {
    const imc = this.imc();
    if (imc < 18.5) {
      return "Under weight.";
    } else if (imc >= 18.5 && imc <= 25) {
      return "Normal weight";
    } else if (imc >= 30 && imc <= 40) {
      return "Obese.";
    } else if (imc > 40) {
      return "Severe obesity";
    }
  }
}

const jose = new Person("José", 0, 0);

console.log(jose.classIMC());
