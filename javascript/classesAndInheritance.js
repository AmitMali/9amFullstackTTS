class Person {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }
}
class Trainer extends Person {
  constructor(name, dob, subjects) {
    super(name, dob);
    this.subjects = subjects;
  }

  getInfo() {
    console.log(this.name, this.dob, this.subjects);
  }
}

const amit = new Trainer("amit", 23021989, ["javascript", "php", "python"]);

amit.getInfo();
