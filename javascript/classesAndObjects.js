// class Person {
//   personName = "amit";
//   getName() {
//     console.log(this.personName);
//   }
// }

// const amit = new Person();
// const sumit = new Person();
// console.log(amit.personName);
// console.log(sumit.personName);
// amit.getName();

// class Animal {
//   animalName = "";
//   type = "";
//   setInfo(animal_Name, animal_type) {
//     this.animalName = animal_Name;
//     this.type = animal_type;
//   }
//   getInfo() {
//     console.log("Name: ", this.animalName);
//     console.log("Type: ", this.type);
//   }
// }

// const dog = new Animal();
// dog.setInfo("Scobby Doo", "Mammal");
// dog.getInfo();
// const fish = new Animal();
// fish.setInfo("Nemo", "Fish");
// fish.getInfo();

// using constructor
class Animal {
  animalName = "";
  type = "";
  constructor(animal_Name, animal_type) {
    this.animalName = animal_Name;
    this.type = animal_type;
  }
  getInfo() {
    console.log("Name: ", this.animalName);
    console.log("Type: ", this.type);
  }
}

const dog = new Animal("Scobby Doo", "Mammal");

dog.getInfo();
const fish = new Animal("Nemo", "Fish");

fish.getInfo();
