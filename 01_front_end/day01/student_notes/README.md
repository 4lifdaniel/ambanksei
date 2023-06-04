![General Assembly](ga_cog.png)

# Intro to JS

## Define programming and why we're learning it

### What is Programming?

The first few weeks of this course will focus on programming skills. This means learning how to "think like a programmer", and also learning to use tools such as Terminal, Atom, Git, etc.

Loosely speaking, learning to "think like a programmer" involves learning:

**Concepts**

* For example, the concept of a "loop", something that repeats.
	* Values might change with successive loops.

**Syntax**

* Precise spelling of variables and inclusion of parentheses, etc.
	* Computers are stupid. They only do exactly what you tell them to.  If you mess something up, they don't realize that and will break

**Logic**

* The sequence of execution in a program, line by line. Problem-solving. How code interacts with other code.

### Why learn programming?

We are making **software**, not regular websites. People these days use **apps** (either on mobile or desktop), which are hosted on the internet rather than installed locally. This is the current web paradigm called **software as a service**, _SaaS_.

Software requires internal logic. Programming is the means of supplying internal logic to a program.

## Java Script

- High Level Programming Language
- Design/Develop interactive web content
- Most popuplar programming language

### Why JavaScript?

The language we will be learning is JavaScript. In a way it does not matter which language we learn, because the same principles apply across languages.

JavaScript is the most in-demand language for junior developers, and there's a lot of work available out there for those who know it.  It is also the only language that both browsers and servers understand(i.e, front end and backend), making it a great language.

## Read Node error messages

Error messages are good. They are not adversarial! They are there to help you.

Error messages are **clues** that you learn to read. You should be able to read these clues on your own.

![](https://i.imgur.com/HjquPtu.png)

The error above is typical. It looks intimidating and weird, but if you pry, you will find valuable clues. For example:

Error messages will tell you a **specific line number** where in the code the error occurred. This tells me the error is on line 1: `first_code.js:1`

Errors will often tell you what **type** of error. `SyntaxError: Unexpected token ILLEGAL`

You have to learn to sort the 'wheat from the chaff' so to speak. This will come with practice.

Errors are a **growth opportunity**. When you receive an error, yes it is an obstacle, but with a little patience it will turn you into a more informed, better developer.

## Add comments to code

Providing verbal comments within your code is great way to make your code comprehensible to others

single line comment:

```js
// this is a single line comment
```

multi-line comment:

```js
/*
this is
a mult-line
comment
 */
```

## Describe the basic data types of JS

What we have so far:

```javascript
console.log('Hello World');
```

The data in quotes is a **string**. A string is just text (string of characters). You can give a string either double or single quotes. If you want to use single quotes and include a quote inside a string, use an **escape character** `\` before the quote.

Example:

```javascript
console.log('Bharath\'s awesome.');
```

Along with strings we have **numbers**.

We could send a number to the console:

```javascript
console.log(100);
```

We can do arithmetic with numbers:

```javascript
console.log(100 + 100);
```

There are no quotes around numbers.

**strings** and **numbers** are the basic _datatypes_ we use day-to-day, along with another datatype, **booleans**, which we will talk about soon.

## Assign values to variables

We can assign strings and numbers to variables using the assignment operator `=`.

```javascript
var phrase = 'In my room is a chair and a table';
```

we can use that variable as a stand-in for the original value:

```javascript
console.log(phrase);
```

**phrase** can be anything we want (with some syntactical caveats), **sentence** for example, whatever makes semantic sense.

**We will not be using `var`** (it's a bit out of date), instead we will be using **`let`** and **`const`**.

Let's use `const` here:

```javascript
const phrase = 'In my room is a chair and a table';
const sum = 99 + 1;
```

`const` variables are **constant** and do not change.  Now that the phrase is saved to a variable, we can call it whenever.

```javascript
console.log(phrase);
console.log(phrase);
console.log(phrase);
console.log(phrase);
```

```javascript
console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);
```

### Variable names

- cannot begin with a number or include special character
- camelCase
	- `thisVariable` NOT `this_variable`
- case sensitive
	- `thisVariable` is not the same as `ThisVariable`

### Semicolons

- The interpreter needs the semicolons.  **DO NOT FORGET THEM!**

### Variable re-assignment

With `const`, you cannot reassign a variable. It is CONSTANT.

```javascript
const item = ' chair';

item = 'eclair';
```

> TypeError: Assignment to constant variable.

Use `const` as your default declaration. This means your variable is safe from arbitrary or accidental changes. However, _if you intend_ for the value of the variable to change, then use `let`.

*Whenever you declare a variable, think first whether you intend to change it*

You can re-assign variables with `let`:

```javascript
let item = 'chair';

item = 'eclair';

console.log(item);
```

## Concatenate values

JavaScript allows us to add strings together with `+`:

```javascript
console.log('hello' + ' world');
```

## Write a While loop

### Programming principle: DRY

Don't Repeat Yourself

What if we needed to write a program that counts from 1 up to 1000? We could set about doing this:

```javascript
console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);
console.log('The number is: ' + 5);
// etc.
```

Are we really going to write 1000 lines of code? Programmers are _lazy_ in a good way. They care about efficiency. They do not want to write 1000 lines of the same thing with minor tweaks. Instead, programmers try to find shortcuts, and luckily, we can use **loops** to perform repetitive tasks.

Here is an example of a **while loop**. We can use 6-ish lines of code to print 1000 lines of text. This is an application of **DRY.**

```javascript
let num = 1;

while (num <= 1000) {
	console.log('The number is: ' + num);
	num++;
}
```

### Loop Concept

What is a loop? A loop is a process that **repeats**. Along the way, the loop might accumulate or change some values. For example, an analog clock works in a **loop**, and each loop of the minute hand increases the count of the hour-hand by 1. The hour-hand counts from 1 to 12, and after 12 loops, it starts counting again from 1.

![Clock loop](https://media.giphy.com/media/zzDDW60OOPm1y/giphy.gif)

### Loop Syntax - while loop

While loop Syntax:

```js
initial condition

while (BOOLEAN EXPRESSION) {
 // run code in block
 change condition
}
```
### Comparative operators:

* `>` greater than
* `<` less than
* `==` equal to
* `>=` greater than or equal to
* `<=` less than or equal to
* `!=` is not equal

Using the **equality operator**:

```javascript
console.log(1 == 2);
```

#### Postfix operator

The **postfix** operator will increment the value of a variable by 1, and save the variable with the new value.

If we save a number to a variable:

```javascript
let i = 100;
```

How can we save the value of that variable plus 1? We can do it this way:

```javascript
i = i + 1;
```

So, the variable equals _itself_ plus one.

The **postfix** operator offers a shorthand:

```javascript
i++;
```

There is also a way to decrement a value:

```javascript
i--;
```

is the same as

```javascript
i = i - 1;
```

#### Compound assignment operator `+=`

We can also do _exactly the same thing_ with the **compound assignment operator**.

```javascript
i += 1;
```

and decrement:

```javascript
i -= 1;
```

the advantage of the **compound assignment operator** is that we can increment by any value

```javascript
i += 3; //increments by 3
i -= 3; //decrement by 3
```

## Write a For loop

A _for_ loop does the same thing as a while loop, but all the 'baggage' is conveniently compacted into the syntax, leaving less room for infinite loops. We don't have to declare any variables outside of the loop like we had to do with _while_ loops.

_For loops_ are what we will use almost all of the time.

### Loop Syntax - for loop
```javascript
for (initial condition; while condition; repeating expression) {
    statements;
}
```
1. some initial code supplied to the loop -- usually a numerical starting value of the loop
2. the condition under which the loop runs -- it will run while the expression is true
3. a repeating expression that runs at the end of each loop -- usually an instruction to increase the numerical starting value

for loop example:

```js
for (let i=0; i <= 99; i++) {
	console.log(i);
}
```



