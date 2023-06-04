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

### Reference:
[Math Methods Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- [Truthiness_Table](https://dorey.github.io/JavaScript-Equality-Table/)

- [Comparison_Table](https://dorey.github.io/JavaScript-Equality-Table/)

- [Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

- [Boolean_Order_of_Evaluation](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- [Control_Flow](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)