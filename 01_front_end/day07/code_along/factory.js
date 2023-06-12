class Car {
  constructor(maker, serialNumber) {
    this.maker = maker;
    this.serialNumber = serialNumber;
  }

  drive() {
    console.log("Vrom Vroom");
  }
}

const newCar = new Car("Mazda", 12345);
// console.log(newCar);

class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }

  produceCar() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }

  findCar(index) {
    return this.cars[index];
  }
}

// const tesla = new Factory("Tesla2");
// tesla.produceCar();
// tesla.produceCar();
// tesla.produceCar();
// tesla.produceCar();
// tesla.produceCar();
// console.log(tesla);

// console.log(tesla.findCar(2));

class Person {
  greet() {
    console.log("Hello from Person class");
  }
}

const newPerson = new Person();
newPerson.greet();

//Static method
class NewPerson {
  static greet() {
    console.log("Hello from Static Greet method of New Person class");
  }
}

NewPerson.greet();
