# OOP Westworld Lab

## Setup

1. In `student_labs` folder, make a new file `oop_westworld.js`.
2. Give `oop_woestworld.js` a console.log.
3. Run it in node `node oop_westworld.js`. Verify the console log appears.
4. Work inside the `oop_westworld.js` file for this lab.

<hr>
<br>

# WESTWORLD

![west world](https://i.imgur.com/WXmau06.png)

From Wikipedia:

> [Westworld] takes place in fictional Westworld, a technologically advanced, Western-themed amusement park populated completely by synthetic androids dubbed "hosts".

## Make your own Westworld hosts

You are going to make some androids for the Westworld park!

#### Create a host

Make an object called `host` that has the following properties:

- name
- occupation

Give your `host` object a method called `saySpecs`.

The `saySpecs` method should output a message from the host listing the host's specifications -- the host's name and occupation:

```
=> "My name is Roget. My occupation is creator of Roget's Thesaurus."
```

<br>
<hr>

#### Create some basic hosts

Now let's make a **class** so that we can easily make many hosts.

Make a class called `BasicHost` that takes parameters for name and occupation.

```javascript
class BasicHost {
  constructor(name, occupation) {
    //stuff here
  }
}
```

Make it so the `BasicHost` function will spit out a host object.

```javascript
var host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
```

```javascript
console.log(host1);
```

Output:

![](https://i.imgur.com/BSerF4b.png)

Make another instance with the BasicHost called `host2`.

<br>
<hr>

#### Augment your basic hosts

Make it so that your `BasicHost` class, when run, will also add a method to your host objects. Give your class a `saySpecs` method that will log all of the specs of the instance.

Create a few more basic host objects with your constructor.

Invoke the `saySpecs` function on those hosts.

<br>
<hr>

#### Populate the world with hosts

How many hosts can we make???? We are going to populate an array with host objects using a **for loop.**

We will need a pool of names to draw from. Make an array called `names`, and add in a few names. Here's one if you want to use it:

taken from http://listofrandomnames.com/

```javascript
const names = [
  "Laila",
  "Jack",
  "Harley",
  "Hertha",
  "Darren",
  "Jolene",
  "Loura",
  "Lona",
  "Davida",
  "Reena",
  "Leland",
  "Ta",
  "Jen",
  "Linn",
  "Roslyn",
  "Margorie",
  "Rafaela",
  "Romona",
  "Shanel",
  "Stan",
];
```

Make an array called `occupations` and add in a few occupations. Here's one if you want to use it:

```javascript
const occupations = [
  "Clerical assistant",
  "Leaflet distributor",
  "Landowner",
  "Special constable",
  "Anaesthetist",
  "Park-keeper",
  "Butler",
  "Choreographer",
  "Blacksmith",
  "Chef",
  "Legal secretary",
  "Song writer",
  "Librarian",
  "Landscape gardener",
];
```

<br>

Make an _empty_ array called `hostArray`. This is where we will store our host objects.

Write a **for loop** that will will run 100 times.
Inside the for loop, push a new BasicHost into the array:

```
hostArray.push(new BasicHost());
```

After the loop, console.log the hostArray.

We have 100 hosts, but they have no values for their attributes:

![](https://i.imgur.com/3IZ5Vmb.png)

FIGURE IT OUT

Make it so that when a new BasicHost is pushed into the array, that host will be assigned a **random name** and **random occupation** from the names and occupations arrays.

If it works, you should have an array of objects of a variety of different hosts.

hostArray:

![](https://i.imgur.com/BKqT6H6.png)

<br>
<hr>

Make a host speak.

`hostArray[55].saySpecs()`

![](https://i.imgur.com/TSJIUzN.png)

# Lab - Classes Additional

## Create the following objects

1. Create a class for a Pet

   - attributes
     - owner - string
     - name - string
     - walk - a method that logs 'walka walka'
   - instantiating a new pet takes the pets name as a parameter and sets the attribute;
   - create one pet and log it
   - run the walk method to make sure it works as expected

1. Create a class for a Dog

   - this should inherit from Pet
   - attributes
     - price - 20
   - methods
     - bark() - log "bark"
     - chaseTail() - log "oh boy oh boy oh boy"
     - getPrice() - return price
   - create a new dog and log it
   - test all the methods to make sure they work as expected

1. Create a class for a Cat
   - this should inherit from Pet
   - attributes
     - price - 10
   - methods
     - purr() - log "purrrrr"
     - clean() - log "cleaning"
     - getPrice() - return price
     - walk() - overwrite the method to console.log 'strut strut'
   - create a new cat and log it
   - test all the methods to make sure they work as expected
1. update one property of the dog after it has been created and log it to check
1. updated one property of the cat after it has been creatd and log it to check

## Stretch

- Using classes, generate a deck of cards, stored in an array
  - cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
  - there are 13 cards per suit, values should match what they are in BlackJack (or another game), - Ace, by default is equal to 11, - cards 2-10 share the same face and value - Jack, Queen and King have a value of 10
- Figure out how to shuffle the array and `console.log` the top card (Hint: google it)
- Figure out how to compare the top and bottom card and `console.log` both cards and a message that says which card is bigger (or a tie)
