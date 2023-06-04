![General Assembly](ga_cog.png)

## Introduction to Math Methods
JavaScript has a little 'library' of math functions that we can access by typing Math and then a . and then whatever method we want, finally we put the things we want to evaluate inside the parenthesis.

There are only a handful of methods we'll find handy for most of our work in this course:
• Math.abs() - gives us the absolute value
• Math.PI - gives us the value of PI
• Math.ceil() - always rounds a floating point number up
• Math.floor() - always rounds a floating point number down
• Math.max() - finds the largest number
• Math.min() - finds the smallest number
• Math.pow() - raises a number to the
• Math.random() - generates a random number between 0 -1
• Math.round() - rounds a floating point number up or down, depending if the decimal is greater than or less than 0.5
• Math.sqrt() - finds the square root of a number

## Intro to Control Flow

### Control Flow

Control Flow is the order in which individual statements or instructions are executed.

Control Flow lets you specify when and which lines of code get executed.

There are three forms of Control Flow:

• Conditionals - skip lines of code
• Loops - repeat lines of code
• Functions - save and later deploy lines of code

Let's start with conditionals:

### Conditionals
We can set up a branching tree-like structure and control the flow of our code. Though, our code will look less like a tree and more like:

```js
if (BOOLEAN EXPRESSION){
// run this code
};
```

If the boolean expression within our condition is true, a branch will execute. If it is false, it will not execute.

### Booleans

• Booleans allow us to set true and false values. With true and false values, we can control the flow of our programs.

### Not

- `!` not sometimes called a bang: changes Boolean value to its opposite.

```js
let hungry = true;
let thirsty = false;
console.log(hungry) // true
console.log(thirsty) // false
// use not/bang
console.log(!hungry) // false
```
### Truthiness
All values in JavaScript have an implicit 'truthiness'. They can be evaluated as either true or false. In effect, every value in Javascript is converted into a Boolean when it is checked as an expression of truth.

All of the following become false when converted to a Boolean

- false

- 0

- "" (empty string)

- NaN

- null

- undefined

Refer to reference for great table on equality, strict equality and if statements

### Equality operators

```js
==, !=, ===, !==
```

Equality operators are not the same as the assignment operator `=`

- `==` equality: compares left-hand and right-hand and checks if they are the same. Returns a Boolean value.

- `!=` inequality: compares left-hand and right-hand and check if they are not the same. Returns a Boolean value.

```js
true == true
true == false
```

### Strict

`===` strict equality: same as equality, but does not coerce

`!==` strict inequality: same as inequality, but does not coerce
```js
5 == '5';
5 === '5';
```
Generally, it is best to use strict equality unless you have a reason to not use it. Sometimes, you can get some unexpected results with using two equal signs.

Again, don't memorize - just look it up: reference has the table comparing and contrasting results of `==`, `===` and `if()` (use tabs along the top)

### Comparison Operators
Comparisons in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

### Logical operators

&&, ||

- `&&` and: evaluates to true if both sides are true. It does not check for equality! Rather, and evaluates the truth of the statement, and will return the value of one of the operands.

```js
true && true
false && false
```
In these examples, each side is the same (they are equivalent), but in this case, both sides do not both evaluate to true. If an && statement begins with false, it automatically evaluates to false. Both sides must evaluate to `true` to `&&` to result in `true`.

|| or: evaluates to true if either side is true.
true || false
false || false
Short Circuiting - we can use the or operator to return a valid value to use as a default
username = ''
let user = username || 'Bob Bobby Bob'
console.log(user)

### Boolean order of evaluation
Order of evaluation matters! When you have a complex statement, be sure to remember the order things will be evaluated

1. >, <, >=, <=
2. ==, ===
3. &&
4. ||

Don't memorize, just look in the reference.

### Modulo
`Modulus as conditionals`

The modulo operator (also referred to as modulus) is represented as a `%` in JavaScript. The Modulo returns the remainder of Euclidean division (Don't worry! It's not as scary as it sounds! Let's look at examples)
Examples
```js
4 % 2 // 0

5 % 2 // 1

8 % 3 // 2
```

### Best Practices

#### Indentation

As we have mentioned before, indentation denotes hierarchy in your code. When writing code in JavaScript, you should indent code that is being run inside other code. Here's an example:

**Correct**:
```js
if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```

Note that the console.log that will be run inside the if portion is tabbed over once to denote that it should be run if this portion of the code is executed.
**Incorrect**:
```js
if (5 % 2 == 0) {
console.log('Number is even');
} else {
console.log('Number is odd');
}
```
Note that this code will still run, but it is hard to read! This will make your coworkers (and instructors) 😕 . You want to make it as easy as possible for others to know what you are doing, so please show the relationships with indentation! Also note, this is an easy case, imagine if you had 30 lines of code, figuring out where you are missing a curly brace or need to move things around gets nearly impossible with improper indentation.

#### Semantic naming
- When naming your variable, be explicit! Skip naming your variables x or y when you can name them `timeTracker` or `uncleRoysChickenCount`.

- Remember, JavaScript naming convention is camel case. This means, the first word in the name is lowercase and any additional words in the name are connected (no spaces between words) and the first letter is capitalized camelCase or thisIsCamelCase.

- In contrast, a language like Python uses snake case which uses underscores like so snake_case.

- HTML uses sausage-case or it is also known as kebab-case.

#### Case Sensitivity
Be aware that names are case sensitive. That means: const redcow is not the same as const redCow.

## Control Flow
We have to figure out how to determine if one of the numbers is even. This is where *Control Flow* comes in:

We can choose to do something depending on the case.

_For this problem:_
- If it's even, let's do something with it...
- If it's odd, let's ignore it.

With control flow, you can decide what to do in different instances.

## The Power of If Statements in Control Flow
This is where **if statements** come into play! We can tell our program to do something *if* it meets certain criteria.

```javascript
for (let i = 0; i < 10; i ++ ){
  if (i == 1) {
    console.log("the number is 1")
  }
}
```

Note: You don't always _need_ an else statement. If your _else_ statement would just be a comment like:

```js
if (true){
  console.log('awesome');
} else {
  // do nothing
}

```

Then you can omit the else statement.

## Arrays & Conditionals

### What is an Array?

- An array is a data structure and like a number or string, you can assign an array to a variable.

- An array is a list. All list items go between square brackets:


- Declare an empty array

  - `const arr = [];`
- Console.log it:
  - `console.log(arr)`


  - Arrays contain `elements` separated by commas `,`

  - `Elements` can be any datatype (string, number, Boolean, another array...)
    - Usually all elements in an array are of the same datatype


```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

### Type Checking

Let's check the types of some things

```js
const num = 0;

console.log(typeof num);
```

### Accessing Elements

Each element in the array has a numbered `index`. The first element has an index of 0.

* Access elements by putting the `index number` in square brackets.

### Changing Elements

* To change an element in an array, first access the element, and then assign a new value

### Array Method: `.length`
Methods are functions that are built into JavaScript that can be used on certain data types. We're going to be looking at an **array method** that will help us with iterating through an array.

We can use the `.length` method to find out the number of elements in an array

### Using expressions to access elements

We can put an `expression` between the square brackets to access array elements.

### Using Variables to Access Elements in an Array
We can also use variables in our square brackets, as long as the variable references a whole number

### LOOPS: Iterate over an array

If we want to print out all of the items, we can make a for loop which will increase that index number for us programmatically:

### Using conditionals to select elements in array

We can use **conditionals** to select elements an array.

#### ARRAY METHODS: Adding and Removing Elements

##### Methods 
1. index of
1. push
1. pop
1. reverse
1. unshift
1. shift
1. slice
1. splice
1. sort

### Multi-dimentional Arrays

Array elements can be can be other arrays.

- multi-dimensional arrays are useful for nested information and grid layout

- Changing elements in a multi-dimensional array is the same process as with a regular array

## Reference:
- [Math Methods Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- [Truthiness Table](https://dorey.github.io/JavaScript-Equality-Table/)

- [Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

- [Boolean Order of Evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

- [Java script code conventions](http://javascript.crockford.com/code.html)

