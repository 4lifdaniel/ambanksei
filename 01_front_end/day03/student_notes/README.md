![General Assembly](/ga_cog.png)

# Functions

## why we use functions

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

## Defining a function

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

Always use **`const`** to declare your functions. It would be a strange day when a function would need to be reassigned.

The code will not run yet. The function needs to be **invoked**.

## Invoke a function

Use one line of code to run multiple lines of code

```javascript
printBoo();
```

Simply use the name of the variable and use **parentheses** to invoke the function.

If the parentheses are not included, the function will not run.

The invocation comes **after** the function definition. If you write it beforehand, it will be trying to invoke something that doesn't yet exist according to the interpreter.

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};

printBoo();
```

### Exercise

* Write a function `printSum` that will console.log the result of 10 + 10

**Extra Reps**

* Write a function `printTriangle` that will print these pound signs to the console (there are 5 console.logs inside the function):

	```
	#
	##
	###
	####
	#####
	```

* Make it so that `printTriangle` will print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function).  

* Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

## Properly name a function

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

* getting data
* setting data
* checking data
* printing data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```javascript
const checkInputLength = (input) => {
	if (input.length > 10) {
		console.log('input length is greater than 10');
	} else {
		console.log('input length is not greater than 10');
	}
};
```

Functions should try to do **only one thing**

If a function, called `checkInputLength`, does more than just check input, then it is a poor function.

Takeaway: Think about appropriate **verbs** to use in your function variable names. The verbs should indicate the **one thing** that the function does.

## Write an arrow function with a parameter

The preceding function, `checkInputLength` had a **parameter** called `input`.

Functions can receive input that modify their behavior a bit.  This input is called a **parameter**.

In the below example, the parameter is arbitrarily called `name`. We can call our parameters whatever we want - whatever makes semantic sense.

Using **concatenation** I can put the input into a string:

```javascript
const sayName = (name) => {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```javascript
sayName("Bharath");
```

We can continue to invoke the function with whatever **arguments** we want:

```javascript
sayName("Kumar");
```

Each time, the output of the function will change to reflect the argument.

### Argument vs Parameter

The **argument** is the input, the **parameter** is how the input is represented in the function.

```javascript
const func = (PARAMETER) => {
	// some code
}

func(ARGUMENT);
```


## Write an arrow function with multiple parameters

A function can take any number of parameters.

```javascript
const calculateArea = (num1, num2) => {
	console.log(num1 * num2);
}
```

When you invoke the function, you generally want to supply the right number of arguments.

```javascript
calculateArea(4, 4)

```
> => 16

### Exercises

* Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1.

	```javascript
	minusOne(10);        // 9
	minusOne(100);       // 99
	minusOne(Infinity);  // Infinity
	```

* Write a function `makeSentence` that takes **three** parameters and **concatenates** them into a fully formed sentence.

	```javascript
	makeSentence('I', 'want', 'chimichangas');
	```

	> => 'Oh boy, do I want chimichangas or what?'


### return: stopping a function

**RETURN** sends the value of your function immediately. You can use **return** to terminate the function.

Example: will the function return 0 or 1? (It won't return both)

```javascript
const example = (input) => {
	if (input == "none"){
		return 0;
	}
	return 1; // if input is "none" this line will not run
};
```

```javascript
example("none")     // 0
example("two");     // 1
```

## Break a problem down into steps

Write a function that will **return** true if a word is a Palindrome, or will **return** false if not.

* Problem solve one step at a time
* Each step might require research

Work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

Determine if each step will require research, and research it.

* reverse the word (how?)
* check if the word is the same as the reverse (how?)
* return true or false


# SCOPE

## Define Scope restriction

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its _scope_, it will not be defined.

In general, you want scope to be restricted. You only want your variables accessible to specific safe zones.

### Example of scope restriction

A variable `num` is defined inside a function.

```javascript
const exampleFunction = () => {
  const num = 100;
  console.log(num * num);
}

console.log(num);   // num is not available outside the function
```

![](https://i.imgur.com/q7yLwgJ.png)

```
exampleFunction();  // even if you run the function first . . .

console.log(num)    // the scope of num is restricted to the function
```


## Differentiate between Local vs Global Scope

When variables are declared inside a function, they are scoped **locally** to that particular function.

Variables declared within a function are available within that function and to any sub-functions. The variables are not accessible outside of the function.

When variables are declared outside of any and all functions, the value of the variable is accessible to all other functions (and all functions within those functions), and are scoped **globally**.

* Global scope is the the part of your code _outside_ of any enclosing functions
* Local scope is the parts of your code that are _inside_ functions.

```javascript
const item = 'spicy meatball';

const exampleFunction = () => {
	console.log(item + " within function");
}

exampleFunction();
```

> => spicy meatball

Everything is defined within a scope. The variable `item` is defined in the **global scope** and is available to all functions and sub-functions.

As a natural consequence of local scope, functions cannot access variables stored in **sibling** functions.

If we make another function:

```javascript
const setItem = () => {
	const item = 'spicy meatball';
	return item;
}

const getItem = () => {
	return item;
}

console.log(getItem());
```

![](https://i.imgur.com/xNQ689Y.png)

The `item` variable is not visible inside `getItem`, because it is scoped only to `setItem`.

## Describe how functions can call other functions

Functions can call other functions that reside in an accessible scope.  For example:

```javascript
const returnName = () => {
  return "Bharath"
}

const returnGreeting = () => {
  return "oh hai, " + returnName()
}
console.log(returnGreeting());
```

Since it is good practice for a function to **do only one thing**, we can have many functions perform different little tasks and call on each other. This is a good strategy for compartmentalizing functionality.

A function can take the **return value** of another function and put it to good use.


## Use `const` and `let` for block-scoping

**`let`** and **`const`** will scope your variables to the **block** in which they are declared.

Example -- make a block and declare a variable within:

```javascript
{
	const item = 'spicy meatball';
}
```

`item` is available inside the block, but not available outside.

This works:

```javascript
{
	const item = 'spicy meatball';
	console.log(item);
}
```

> => "spicy meatball"

This doesn't:

```javascript
{
	const item = 'spicy meatball';
}

console.log(item);
```

> ReferenceError: item is not defined


**`var`** by contrast will leak out of a block.

```javascript
{
	var item = 'spicy meatball';
}

console.log(item);
```

> => "spicy meatball"

This is not so great. In general, we want to control our scope as tightly as possible. If we don't, we can end up with variable collisions and accidental overwrites. This is why we stick with `let` and `const`.

## Use block-scoping with loops

Using `let` within a for loop control panel scopes the variable to the block.

```javascript
for (let i=0; i < 100; i++) {
	console.log('Inside the block: ', i);
}

console.log('Outside the block: ', i);
```

> Inside the block: 1
>
> Inside the block: 2
>
> etc.
>
> Outside the block: Reference error: i is not defined

## Block scope flow: outside in

We know if we declare a variable inside a block that it is not accessible at the global level.

If we declare a variable at the global level, is it accessible inside a block.

## Define recursion

A function has access to **itself** because it is always declared in a scope accessible to itself.

When a function invokes itself, this is called **recursion**.

```javascript
const func = () => {
	return func();
}
```

This will create a **loop**. This particular loop is **infinite** because it has no **exit condition**.

This function has an exit condition and can safely call itself:

```javascript
const countdown = (num) => {
    if(num != 0){
        console.log(num);
        countdown(num - 1 );
    } else {
        return
    }
}
```

See if you can figure out how it works.

## Define pollution

You do not want your global scope to be **polluted**. There are reason for not polluting your global scope.

* Global variables can be overwritten or misconstrued elsewhere
* Potentially causing unwanted, hard to track bugs
* Namespace
* Memory / garbage collection

http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted