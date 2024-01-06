class person {
    name;
    age;
  
    describe() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
  }
  
  
  const marcos = new person();
  marcos.name = "José Marcos";
  marcos.age = 0;
  
  console.log(marcos);
  
  const renan = new person();
  renan.name = "Renan Alves";
  renan.age = "22";
  
  console.log(renan);
  
  marcos.describe();
  renan.describe();