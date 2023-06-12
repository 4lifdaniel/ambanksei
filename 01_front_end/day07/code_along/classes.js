class Person {
  constructor(name, gender, lovesCats = false, lovesDogs = false) {
    this.legs = 2;
    this.arms = 2;
    this.eyes = "brown";
    this.hair = "black";
    this.name = name;
    this.gender = gender;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs;
  }

  greet(name) {
    console.log(`Hello Everyone, its ${name}`);
  }

  walk() {
    console.log("I hate walking, i think");
  }

  setHair(hairColor) {
    this.hair = hairColor;
  }

  objectGreet(otherObject) {
    console.log("Hello " + otherObject.name + " I am " + this.name);
  }
}

const you = new Person("Alice", "Female");
const me = new Person("Bob", "Male");

class UltraMan extends Person {
  constructor(name, gender) {
    super(name, gender);
    this.superPowers = [
      "laser beam",
      "bullet proof",
      "x-ray vision",
      "super speed",
      "super human strength",
    ];
  }
  fly() {
    console.log("Up Up High in the Sky");
  }

  greet(otherPerson) {
    super.greet(otherPerson);
    console.log(`Greetings Earthlings - Oops i mean ${otherPerson}`);
  }

  walk() {
    super.walk();
    this.fly();
  }
}

const superMan = new UltraMan("Clark Kent", "Male");

console.log(superMan);
superMan.greet("Bob");
superMan.walk();

// console.log(me);
// console.log(you);

// console.log(me.planet);
// console.log(you.planet);

// Person.prototype.planet = "earth";

// console.log(me.planet);
// console.log(you.planet);

// me.objectGreet(you);
// you.objectGreet(me);

//me.hair = "no";
// me.setHair("No");

// console.log(me);

// me.greet("bob");
// you.greet("alice");

// me.walk();
// you.walk();
