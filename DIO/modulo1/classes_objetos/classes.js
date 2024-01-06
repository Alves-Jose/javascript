class Person {
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
  
  function ComparePeople(p1, p2){
    if (p1.age > p2.age){
        console.log(`${p1.name} is older than ${p2.name}`);
    } else if (p2.age > p1.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    } else {
        console.log(`${p1.name} and ${p2.name} are the same age`);
    }

  }

  const marcos = new Person('Marcos', 0);

  const jose = new Person('José', 1);

  ComparePeople(marcos, jose);