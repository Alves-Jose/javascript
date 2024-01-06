class person {
    name;
    age;
    birth_date;

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.birth_date = 2024 - age;

    }

    describe() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
  }
  
  
  const marcos = new person('José Marcos', 0);

  console.log(marcos);