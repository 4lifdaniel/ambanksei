[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# JavaScript Objects

#### Learning Objectives

- Working with objects

#### Prerequisites

- JavaScript

---

## Getting Started

1. In today's `student_labs` folder, create an `objects.js` file and work in this file for the rest of this lab.

## Syntax 

1. List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

Example:

```
{} curly braces define the object.
```

## Me, Me, Me

1. Create an empty object called `me`.
2. Assign it properties for **name**, **age**, and **email** with corresponding values.

The object would look something like this if we console logged it:

```javascript
console.log(me);
```

> => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}

3. Using dot notation, access the **name** property in your object.
4. Without writing directly into the object, update the value of **age** to be 1000 years old.
5. Using dot notation, verify that **age** has been updated.
6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
6. Access the value of "place of residence"

## Slimer 

```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
```

* Given the **slimer** object:
    - What would you write to access the `name` and console.log it?
    - What would you write to change the `type` to 'creature' (without changing it inside the object itself)
    - What would you write to add a key to the object called `age`, and set the age to 6?
    - console.log the object to make sure `type` is creature, and `age` is 6

## Ogres 

Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.

Using **objects**, create **models** and have them interact.

* how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
* how would you model an `ogre`? Your ogre will want **hitpoints**.

* Write a very small program that will simulate a battle between your adventurer and an ogre.
	* When your adventurer's hitpoints reach 0 the game is over.
	* When your ogre's hitpoints reach 0 the game is over.

* Bonus: Try to accept user input for the game by running it in the Chrome console and using alerts and prompts 

## Cat Combinator 

### 1. Mama cat
* Define an object called `cat1` that contains the following properties:
	* name
	* breed
	* age (a number)

* console.log the cat's age
* console.log the cat's breed


### 2. Papa cat
* Define an object called `cat2` that also contains the properties:
	* name
	* breed
	* age (a number)


### 3. Combine Cats!

The cats are multiplying!

Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.

* Pass `cat1` and `cat2` as arguments to the `combineCats` function. The function should console.log them.

Example:

```javascript
combineCats(cat1, cat2)
```

> { name: "Joe", age: 19, breed: "Mog" }

> { name: "Jam", age: 45, breed: "Siamese" }


**This is to demonstrate that functions can take objects as arguments**

You could also invoke the `combineCats` function by writing the objects straight into the parentheses:

```javascript
combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
```
<br>

* Make it so the `combineCats` function will return a combination of the two incoming cats
	* The result should be an object wherein the
		* name is a concatenation of the parents' names
		* the age is 1
		* the breed is each of the parents' breeds with a hyphen in between

Example:

```javascript
console.log(combineCats(cat1, cat2));
```

Result:

![](https://i.imgur.com/CEB2ire.png)

**This is to demonstrate that a function can return an object**

## Cat Brain Bender 

If `catCombinator` returns an **object**, and if `catCombinator` takes **objects** as **arguments**, then it stands to reason that:

`catCombinator` can use **itself** as its own argument.

Take a second to stew on that . . .

What is the result of:

```javascript
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
```

Whoa . . .

The above console.log is **two levels** deep of combineCats.

* Write a console.log that is **three levels** deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

Your output should look something like:

![](https://i.imgur.com/zuTzm5X.png)

## Hungry for More? 

<details><summary><strong>User Object Data Structure</strong></summary>

Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

### 1. Make a user object

* Create an object called `user`.
* Write in to the object the key-value pairs for `name`, `email`, `age`, and `purchased`. Set the value of `purchased` to an empty array `[]`. Set the other values to whatever you would like.

### 2. Update the user

* Our user has changed his or her email address. Without changing the original `user` object, update the `email` value to a new email address.

* Our user has had a birthday! Without changing the original `user` object, increment the `age` value using the postfix operator. Hint: `age++`

### 3. Adding keys and values

You have decided to add your user's location to the data that you want to collect.

* Without changing the original `user` object, add a new key `location` to the object, and give it a value or some-or-other location (a string).

### 4. Shopaholic!

* Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchased` array.

* Our user has purchased an item! They have purchased some "peace of mind". Using `.push()`, add the string "peace of mind" to the `purchased` array.

* Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchased` array.

* Console.log just the "Merino jodhpurs" from the `purchased` array.

### 5. Object-within-object

You can add an object to an existing object in the same way that you can add any new key/value pair.
If we want to give our user a `friend` with a `name` and `age`, we could write:

```javascript
user.friend = {
	name: "Grace Hopper",
	age: 85
}
```

When we console.log `user`, we would see the `friend` object added to our user object.

* Write a `friend` object into your `user` object and give the friend a name, age, location, and purchased array (empty for now)

* Console.log just the friend's name
* Console.log just the friend's location
* CHANGE the friend's age to 55

---

*Copyright 2023, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*