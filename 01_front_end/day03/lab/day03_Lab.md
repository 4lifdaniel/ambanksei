[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)


## Problem solving

Solve the following problems.

Problem solving means taking things **one step at a time**, and often going **beyond what you already know**. Neither of these are easy.

Taking things one step at a time means stopping, taking a breath, evaluating your thoughts, testing what you have, and organizing your next step.

Often, you won't yet have the tools to solve a problem. This happens in the real world, and it means doing research. 

These two things are crucial in the mindset of a developer and they are why developers get paid the dollaroonies.

<br>
<hr>

### printGreeting

Write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting.

```javascript
console.log(printGreeting("Slimer"));
```

> => Hello there, Slimer!

<br>
<hr>

### reverseWordOrder

Write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

```javascript
console.log(reverseWordOrder("Ishmael me Call"));
```

> => "Call me Ishmael"


```
console.log(reverseWordOrder("I use Lâncome on my comb"));
```

> => "comb my on Lâncome use I"

Hints: is there a method that can split a string into an array of strings? Can you use a loop creatively to print array elements in a certain order?

<br>
<hr>

### calculate

Write a function called `calculate`.

This function should take three arguments, two numbers and a string.

Name the parameters `num1`, `num2`, and `operation`.

If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

```javascript
console.log(calculate(4, 3, "sub"));

=> 1
```

```javascript
console.log(calculate(4, 3, "exp"));

=> 64
```

<br>
<hr>

### printConsecutives
 
Write a function `printConsecutives` that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.

```javascript
printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
```
> => 1 2 3
> 
> => 44 45 46

```javascript
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);
```

> -3 -2 -1
> 
> -2 -1 0
> 
> -1 0 1
> 
> 0 1 2
> 
> 1 2 3

<br>
<hr>

### letterReverse

Write a function `letterReverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

```javascript
console.log(letterReverse("Luke I am your father"));
```
> => "ekuL I ma ruoy rethaf"

```javascript
console.log(letterReverse("Aren't you a little short for a storm trooper"));
```

> => "t'nerA uoy a elttil trohs rof a mrots repoort"

<br>
<hr>
<hr>



## More Problem solving

Remember:

* one step at a time (test thoroughly each step)
* researching a step is excellent (although time-consuming)

# 1
## Calculate the Cube
Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

```javascript
console.log(calculateCube(5));
```

> => 125


# 2
## Is a Vowel?
Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

```javascript
console.log(isAVowel("a"));
```

> => true


# 3
## Get Two Lengths
Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
console.log(getTwoLengths("Hank", "Hippopopalous"));
```

> => [4, 13]


# 4 
## Get Multiple Lengths

Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.


```javascript
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
```

> => [5, 4, 2, 2, 4]


# 5
## Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

```javascript
console.log(maxOfThree(6, 9, 1));
```

> => 9


# 6
## Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
```

> => "Peanutbutter"


# 7
## Transmogrify the Numbers
Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

```javascript
console.log(transmogrify(5, 3, 2));
```

> => 225

<br>
<hr>

# 8

## A Needle in the Haystack

[From Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

[Join CodeWars](www.codewars.com/r/bEqEeQ)

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

After your function finds the needle it should return a message (as a string) that says:

`"found the needle at postition"` plus the index it found the needle so:

`find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

Should return:

`"found the needle at position 5"`

# 9 
## Sum the Positive

[From Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381)

[Join CodeWars](www.codewars.com/r/bEqEeQ)

Given an array, return the sum of only the positive numbers

`[1, -4, 7, 12] => 1 + 7 + 12 = 20`

# Keep going!

[Join CodeWars](www.codewars.com/r/bEqEeQ) and find your own challenges to solve! Find a great one? Share it in slack!



