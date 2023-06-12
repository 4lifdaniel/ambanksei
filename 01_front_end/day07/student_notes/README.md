![General Assembly](/ga_cog.png)

# JavaScript - Classes Intro to Object Oriented Programming (OOP)

## Explain why we need classes

Sometimes we need to repetitively create new objects with the same attributes. Imagine we wanted to create a bunch of hotels for a boutique travel agency.

We'd need at least:

- name
- location
- rating
- vacancies
- tags describing the hotel
- rooms (an array of objects with details of the rooms)

```js
{
  name: 'Hotel California',
  location: 'California',
  rating: 4,
  vacancies: true,
  tags: [
    'pink champagne',
    'wine',
    'lovely',
    'can\'t leave'
  ],
  rooms: [
    {
      'roomNumber': 102,
      'size': 'Queen Double',
      'price': 55,
      'booked': true
    },
    {
      'roomNumber': 202,
      'size': 'King Suite',
      'price': 68,
      'booked': false
    },
    {
      'roomNumber': 404,
      'size': 'Queen Double',
      'booked': false
    },
    {
      'roomNumber': 605,
      'size': 'King Suite',
      'price': 68,
      'booked': true
    },
    {
      'roomNumber': 777,
      'size': 'Penthouse',
      'price': 888,
      'booked': false
    }
  ]
};
```

Great! One object. How can we create another one? How about copy pasting, then changing all the details? Typing it all from scratch? What if someone makes a typo with a key? What if our boutique expands to 1000 hotels?

There is a better way! We can create a class, which will be a blueprint or template for similar objects. Not only can we add data, we can also include functionality.

### Difference between classes and functions:

- Classes are beneficial when you `need to create complex object structures`, `establish relationships between objects`, and `provide an abstraction layer`.

- Functions, on the other hand, are `useful for writing reusable`, `modular code` and for embracing functional programming principles.

Both have their place in JavaScript development, and the choice depends on the specific requirements and design considerations of your project.

#### Advantages of classes:

**Abstraction and Encapsulation**: Classes allow you to `encapsulate related data and behavior into a single entity`. It provides a way to abstract away the implementation details and expose only the necessary information and functionality to other parts of the code.

**Inheritance and Polymorphism**: Classes `support inheritance`, which enables you to create a hierarchy of classes where derived classes inherit properties and methods from a base class. This promotes code reuse and allows for polymorphism, where different objects of related classes can be treated interchangeably.

**Constructor Initialization**: Classes provide a `constructor method` that is automatically called when creating new instances of the class. This allows for convenient initialization of object properties and avoids repetitive code.

**Readability and Organization**: Classes offer a clear and structured way to define objects and their associated properties and methods. This can improve the readability and maintainability of the code, especially for larger projects.

## Create a class to define the blueprint for creating objects

When creating a class, it's custom to capitalize the first letter of the variable, so we know it's a `class`. This follows customs in other programming languages.

```javascript
class Person {}
```

Now we can "instantiate" or create new objects using this class. We do this by adding the `new` keyword before calling the class name like a function.

```javascript
const me = new Person();
const you = new Person();
console.log(me);
console.log(you);
console.log(typeof me);
console.log(typeof you);
```

## Add methods to a class

Right now, our object doesn't do anything. Let's have it do some stuff;

```javascript
class Person {
  greet() {
    console.log("hi!");
  }
}

const me = new Person();
const you = new Person();

me.greet();
you.greet();
```

These methods can, of course, take parameters:

```javascript
class Person {
  greet(otherPerson) {
    console.log("hi " + otherPerson + "!");
  }
}
const me = new Person();
const you = new Person();
me.greet("you");
you.greet("me");
```

We only had to update our code in one place, and then every instance of the class now has the updated functionality. Sweet!

If we have multiple methods, don't put commas between them:

```javascript
class Person {
  greet(otherPerson) {
    console.log("hi " + otherPerson + "!");
  }
  walk() {
    console.log("I hate walking.");
  }
}

const me = new Person();
const you = new Person();
me.greet("bob");
me.walk();
you.greet("bob");
you.walk();
```

## Set properties on an instance of a class

Let's add some properties with a `constructor` function. This is a function that gets called once, each time an object is created:

```javascript
class Person {
  constructor() {
    this.legs = 2;
    this.arms = 2;
    this.eyes = "blue";
    this.hair = "black";
  }
  greet(otherPerson) {
    console.log("hi " + otherPerson + "!");
  }
  walk() {
    console.log("I hate walking.");
  }
}
const me = new Person();
console.log(me);
```

`constructor` is a special function. Try misspelling `constructor` (ie `constr`) and see if you still get the same results.

**[Reserved Words in Javascript](http://www.javascripter.net/faq/reserved.htm)**

JavaScript uses `this`. So we can access things within an object this way.

```js
const vendingMachine1 = {
  snacks: [
    {
      name: "Kit Kat",
      price: 6,
    },
    {
      name: "Lays Chips",
      price: 20,
    },
    {
      name: "apple",
      price: 12,
    },
  ],

  vend(input) {
    //Belo both code does samething
    console.log("Vending", vendingMachine1.snacks[input]);
    console.log("Vending", this.snacks[input]);
  },
};

vendingMachine1.vend(2);
```

## Make an instance of each class customizable

Our world is very boring and weird if all of our people are exactly the same! We need a way to customize each object: Our constructor function can take params which we can use to alter the properties of the object instantiated.

## Create default values

Sometimes, you want to create default values that can be overwritten.

There are two ways to write it, writing it in the constructor with an `=` is the newer way. Using `||` is the older way and does work. In both cases, values with that have default parameters should go at the end (why?).

**Because if we don't put it in the last, it will create issue with the order**.

### Prototype:

In JavaScript, the `prototype` is an internal property of objects that allows objects to inherit properties and methods from other objects.

Every object in JavaScript `has an associated prototype`, which can be accessed using the `prototype` property.

# JavaScript - OOP Inheritance

## Make a class inherit attributes from a "parent class"

Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes.

Here is our parent class. But what if we have a super hero amongst us that has all our human attributes and more?

```javascript
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
```

We could just copy paste the above and add what we need, but that's not sticking to the principal of DRY. Instead we can `extend` our Person class for our superhero

We can now add additional functionality:

```javascript
class UltraMan extends Person {
  fly() {
    console.log("Up Up High in the Sky");
  }
}
```

We can call parent class method by using `super` keyword:

```javascript
walk() {
    super.walk();
    this.fly();
  }
```

`super` is another special keyword/function. Try mispelling it - and you'll see it won't have the same functionality.

# JavaScript - OOP Factories

## Create a factory

- Sometimes we need to have a factory object that will generate other objects
- The purpose of the factory is so it can control the creation process in some way
- This is usually a single object that exists throughout the program that performs a set of functions

  - also called a singleton

  Let's start with a car

```javascript
class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker;
  }
  drive() {
    console.log("Vroom Vroom");
  }
}

const newCar = new Car("Mazda", 12345);
console.log(newCar);
```

Now let's make a factory class that will make cars for us.

```javascript
class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }
  generateCar() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar(index) {
    return this.cars[index];
  }
}
const tesla = new Factory("Tesla");
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));
```

Now we can easily create another new factory that produces its own cars

### Static

The static keyword defines a static method or field for a class, or a static initialization block. Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

```javascript
class Person {
  static greet() {
    console.log("Hello from static method");
  }
}
```

We can access static methods without even creating object.

```javascript
Person.greet();
```

### Reference:

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[Static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
