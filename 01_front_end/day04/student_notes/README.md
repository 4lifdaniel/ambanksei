![General Assembly](/ga_cog.png)

# Building an Interactive App In The Browser

### Thinking Programmatically

### Pseudo Code

Pseudo code is the process of taking a larger solution and breaking it down into the programmable steps without actually writing any code.

1. Think about the larger solution as a whole, but as a series of steps that you would write out for a child to follow
1. Write out the solution in plain English, breaking it down into as many tiny steps as possible.  Remember, this child doesn't want to do the task.  If there's any ambiguity, you're sunk
1. Identify the following:
    - Assertions
        - comments, assumptions
    - Conditionals
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.
1. (Optional) Try to convert each line into something that resembles code

## Interactivity

### Why Javascript

Javascript is the language used to make web pages interactive

### Execute Javascript in a web page

1. Put your javascript in a .js file as normal
1. Reference the file inside a script tag inside the `<head>` tag of your html file

    ```javascript
    <head>
        <script src="yourfile.js"></script>
    </head>    
    ```

### View logged messages in the browser

To see a message that you've created using `console.log()`:

1. Right click somewhere on the web page in the browser (two finger click on track pads) and choose "Inspect" from the dropdown that appears. ![](https://i.imgur.com/4wXah3M.png)
1. At the top of the pane that appears, choose "Console" ![](https://i.imgur.com/T51Jxtv.png)

Now any messages that you send using `console.log()` will appear here (next to the blue carrot)

### Send a message to the user in the browser

`alert()` is a global function that will open up a message box in the browser

```javascript
alert('Hello');
```

### Get user input in the browser

`prompt()` is like alert, but it opens up a window with a message AND a place to enter some text

```javascript
const yourAnswer = prompt('Some question', 'A default value goes here');
console.log(yourAnswer)
```

## Problem solving for a bigger program

### Nested function invocations

You can have functions call other functions:

### Sequence of execution

Program execution happens in a branching structure.  
### Reset state

- Sometimes you want to reset a situation to its original state
- This can be done with a start function that gets called at the beginning and restarting of situation.
    - It should reset all values and begin process again

### Basic Functions review

Functions encapsulate (isolate) a set of commands pertaining to one set of functionality

1. Get a users name
1. Add an item to your cart
1. Shoot the lizard creature
1. etc

Try not to have a function that "does" multiple things

### Loops and Functions

#### When to use which?

- A loop is used whenever you do something repeatedly
- A function is used to simplify something more complex (e.g. Take the orange out of the fridge)

#### Functions in Loops

If executing a function multiple times, you don't need to define the function within the loop.  Instead put it at the top


#### Loops in Functions

You can have loops within a function:

### When/How to use a function in a program

- If you can try to have your functions defined at the top of the javascript file
- At the bare minimum, make sure you create your functions before calling them

# Objects

## Explain the difference between arrays and objects

We have seen the following datatypes:

* String
* Number
* Boolean

Arrays are a **data structure**. We use them to organize our data: in the case of arrays, we can organize our data into a **sequential list** data structure.

* We can use arrays to store multiple pieces of data as a sequential list:

```javascript
const vehicle = ["blue", 4000, 1989];
```

* Each element has a corresponding index (or place), in sequence.

But with the array above, we don't know what the values mean. Does "blue" refer to the color of the vehicle? To the mood of the owner? Is it the model of the vehicle?

* An object is also a **data structure**, but we can use objects to store data with greater specificity.

* In JavaScript, **objects** are what we use to represent **key-value** pairs.

## Store key-value pairs inside an object

Key-value pair syntax:

```javascript
const car = {
	color: "blue",
	hp: 4000,
	year: 1989
}
```

* Unlike arrays, objects use _named keys_ rather than ordered indexes. Each piece of data is _bound_ to its key, rather than assigned an index. The data is not _sequential_.

* In Javascript, an object is a way to group many pairs of keys and values together

We can console.log the entire object:

```javascript
console.log(car);
```

## Access values by key-name

We can access the values stored in key using dot notation:

```javascript
console.log(car.color)
```

## DIFFERENCES BETWEEN ARRAYS AND OBJECTS

* Arrays are declared using the square brackets ` var arr = [];`
* Objects are declared using the curly braces `var obj = {}`

Objects contain _key-value pairs_. They are are the **properties** of the object

A **key** is like an **index** in an array, but it has

* a name
* it is unique

A key is really a string but we can omit the quotes.

A **value** is what a key _refers to_, and can be any datatype.

## Add Object Properties

You can easily add more properties to a previously declared object.

Add properties to the object by simply adding a key using dot notation and the value using an equals `=`.  

## Change Object Properties

Changing the value of an existing key has the same syntax as creating a new key-value pair.

## Explain why we use an object instead of an array

When designing your programs, it is up to you to **choose** how to model your data. We can represent real-life things with our datatypes, but it's a matter of choosing the appropriate datatypes.

If the thing you want to model is just a list, use an **array**.

If the thing want to model has properties, use an **object**.

Using what we know about datatypes so far, which datatype would we use to model:

1. The name of your cat
2. The age of your cat
3. Your cat's favorite things
4. Whether your cat can speak French
5. Whether your cat can solve a Rubik's cube
6. Your cat

## Manipulate objects and arrays declared as `const`

`const` only prevents you from reassigning a variable, it doesn't prevent you from adding or changing elements of arrays or properties of objects.

## List common errors made with objects

### Unique Keys

It just makes sense that keys ought to be unique within an object. Values, however, can be whatever.

An object can not have more than one key with the same name. If it does, the value will default to the last key with the same name, and the prior properties will be excluded on creation.

Conclusion: keys should be unique within an object. Values, however, are not unique.

### Accessing and Naming Keys Using Brackets and Quotes

You can create and access any key with square brackets and quotes.

With square brackets and quotes, you can make key names with spaces and special characters, because the key is _coerced_ into a string. _But_ you then have to access the value from here on out with square brackets and quotes.

### Keys That Are Numbers

If a key is just a number, that number will be coerced into a string, which is fine.

But, you cannot access, add, or change numbered keys with dot notation.

There is another way to access key-values using square brackets and quotes `obj['1']`

## Use object properties with conditionals

You can use object properties with conditionals, loops, etc

You can test to see if a property exists on an object.

Accessing a property that doesn't exist on an object gives you `undefined` which is treated as `false`.