[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

## ES6 (ECMAScript 6)

### What is ES6?

ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

React uses ES6, and you should be familiar with some of the new features like:

- Classes.
- Arrow Functions.
- Variables (let, const, var).
- Array Methods like `.map()`.
- Destructuring.
- Modules.
- Ternary Operator.
- Spread Operator.

**Spread operator**:
The JavaScript spread operator `(...)` allows us to quickly copy all or part of an existing array or object into another array or object.

```js
//SPREAD (take out of array)
//Let's look at an awesome Math method
const x = -5;
const y = 5;

console.log(Math.max(x, y)); // 5

// But what if you have
const z = [1, 5, -2, 8, -9, 17, -22];
// Using Math.max is doable, but cumbersome with an array.

// Now you can do
console.log(Math.max(y, ...z)); // 17

// Easy as pie!
```

The spread operator is often used in combination with destructuring.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one); //1
console.log(two); //2
console.log(rest); //[3,4,5,6]
```

#### Spread Operator for Objects:

The spread operator can also be used with objects to create a new object by merging the properties of one or more existing objects.

You can modify or add properties to an object using the spread operator.

```javascript
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31, city: "New York" };

console.log(updatedPerson); // Output: { name: 'John', age: 31, city: 'New York' }
console.log(person); // Output: {name: 'John', age: 30 };
```

The spread operator provides a convenient way to manipulate arrays and objects in JavaScript by creating new instances with expanded or merged elements/properties.

The difference between `const newObject1 = originalObject;` and `const newObject = { ...originalObject };` lies in how they create references to the original object.

**const newObject1 = originalObject;**:

- This line of code assigns `newObject1` as a reference to the originalObject.

- It means that `newObject1` and `originalObject` point to the same object in memory.

- If any modifications are made to `newObject1` or `originalObject`, both variables will reflect those changes because they reference the same underlying object.

### Destructuring

Destructuring in JavaScript is a convenient way to extract values from arrays or objects and assign them to variables. It allows you to extract specific values and store them in separate variables, making code more concise and readable.

#### Destructuring Arrays

```js
//Destructuring in Arrays
const numbers = [1, 2, 3, 4];

const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];

//Destructuring the array values same as above one
const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log(firstNumber, secondNumber, thirdNumber);
```

#### Destructuring Objects

```js
//Destructuring of objects
const person = {
  name: "John",
  age: 5,
  country: "Malaysia",
};

//Store `John` to name
const { name } = person;

//Same as above code
//const name = person.name;
```

By learning destructuring in JavaScript, you will gain a fundamental skill that is widely used in React development. It will help you work with `props`, `state`, and `component composition` more effectively, leading to cleaner and more efficient code.

# Mutable VS Immutable

One of the things that makes React very quick is that it adheres to the concept of immutable state. But what does immutable mean?

Well at its root is the word _mutate_. When we mutate something we change it. We modify it in place. When Bruce Banner turns into the Incredible Hulk, he mutates. He changes his body.

Therefore if somehting is _immutable_, it cannot change. In JavaScript, immutable data cannot change its structure or the data in it. It’s making that value a fact, a source of truth.

If a data structure is _mutable_, it is emphemeral, fleeting, and subject to any change at any given point in time.

**Mutable**: operations that modify the original data.
**Immutable**: Operations create new copies or modified versions.

React doesn't generally like when we mutate the data.
The reason being when we mutate an object we don't get new object,
so it is hard for react to know what has changed or even anything has changed at all.

When the underlying data changes, React has to get the work to update the User Interface(view).
For this it compares the old data with new data.
If we mutate the old data then React doesn't know what has changed.

Let's have a look at some array methods that are mutable and immutable:

| Mutable     | Immutable                |
| ----------- | ------------------------ |
| `splice()`  | `slice()`                |
| `push()`    | `concat()`               |
| `pop()`     | `slice(-1)`              |
| `shift()`   | `slice(1)`               |
| `unshift()` | `[element, ...oldArray]` |
| `sort()`    | `slice(0).sort()`        |
| `reverse()` | `slice(0).reverse()`     |
| N/A         | `filter()`               |
| N/A         | `map()`                  |
| N/A         | `reduce()`               |

In JavaScript, `mutable operations modify the original data directly`, while `immutable operations create new copies or modified versions` of the original data without altering it.

### Terenary Operator

The ternary operator is a concise way to write conditional statements in JavaScript. It allows you to assign a value or execute an expression based on a condition. The syntax of the ternary operator is as follows:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

The condition is evaluated first. If the condition is true, the expressionIfTrue is executed, and its value is returned. If the condition is false, the expressionIfFalse is executed, and its value is returned.

Let's go through some examples to understand how the ternary operator works.

Usual way of using if else:

```javascript
const num = 10;
let result = "";
if (num > 0) {
  result = "positive";
} else {
  result = "negative";
}
```

If we implement the above using terenary operator:

```javascript
const num = 10;
//Ternary operator expression?<if true>:<if false>;
let result = num > 0 ? "positive" : "negative";

console.log(result);
```

# Passing Props

## Learning Objectives

- Create and pass props to Components
- Loop over an array of data and pass multiple props
- Work with additional JSX rules.

## Framing

Having worked with functions we know that they are meant to be reusable. Part of the reusability is in accepting arguments, performing an action and returning a value.

`Standard Input` produces `Standard Output`

Now consider that our application contains many Components, some of which may require data points in order to render the UI.

The data we pass from a `parent > child Component` are called: `props`. Make note that it is the parent that passes props to a child.

React data flow is `unidirectional` and can only be passed down, and never directly from `child` to `parent` or `sibling` to `sibling`.

<hr>

### Prop Rules

Let's extend the rules for creating Components and working with JSX to now include `props`.

🚔 Props adhere to the following rules:

- Data is unidirectional passed down from a `parent` > `child`
- All Props passed to a child are organized into a single object in the child Component
- Props are `immutable` and cannot be reassigned a new value within the receiving child Component

This Rule isn't regarding props but something we will need to keep in mind going forward:

- Any Components created using Array.map() must be assigned a key prop with a unique value.

### Passing Props

Say for instance we wanted to render the name that the image represents in our cards example. We could go directly to `CardBody` and do the following:

```html
<h5 className="card-title">Santorini</h5>
```

This is a fairly manual process and wouldn't be efficient if we had 100 or 1000 cards to render.

So let's add a `prop` to CardBody and pass it the value of `Santorini`.

A `prop` is written in a `name=value` format like the other html attributes your used to writing such as:

```html
<!-- The src property of a image tag -->
<img src="someurl" />
<!-- The class property assigned to any element -->
<div className="container"></div>
<!-- The href property assigned to an anchor tag -->
<a href="someurl"></a>
```

Since the `Card1` component is the parent that renders `CardBody` than it must pass the prop to it's child.

🚔 - Data is unidirectional in React and is passed down from a `parent` > `child` Component

Let's assign CardBody the following `prop`.

```js
<CardBody title="Santorini" />
```

Nothing should really change as we have already updated CardBody with that title name. So we need to update the CardBody Component to accept props.

#### Accepting Props

The first thing we need to do is add the keyword `props` as a parameter. So inside CardBody.js make the following change.

Let's make sure that our Component is being passed the `title` prop by adding a console.log.

```js
const CardBody = (props) => {
  console.log("this is props:", props);
  // ...rest of the code
};
```

In DevTools you should see the following in the console.

<img src="https://i.imgur.com/HlrtO2T.png" width=300/>

We can see here that `props` is an object and that `title` is a key. This will be the same pattern for when we start passing in multiple props. Each prop passed will be assigned a key:value pair.

<hr>

#### Using Props

Now that we have confirmed we are being passed the value we need for title let's use it to replace the hard coded value.

Let's try and use the prop that was passed.

```js
<h5 className="card-title">props.title</h5>
```

the result should be...

<img src="https://i.imgur.com/XhKpkoR.png" width=300/>

That didn't seem to work out as planned. It seems it outputs `props.title` and not the value

 <h5 className="card-title">props.title</h5>

It seems we forgot about one of the rules of JSX:

🚔 Any JavaScript code that needs to be executed in JSX must be enclosed in opening/closing curls braces `{}` (Remember, think of `{}` in React like the `<%= %>` in ejs)

```js
<h5 className="card-title">{props.title}</h5>
```

<hr>

### Passing Mulitple Props

We could do the same for all the additional values we wish to pass but as you can imagine if we had 10, 20, 100+ cards this manual method becomes completely inefficient.

Also it is more likely that the data we will be using to render the cards will be imported either via a file or returned from an API call.

Either way we should expect that if we will need to create multiple cards that the data will be stored as an array of objects: `[{}, {}]`

<hr>

#### Creating Multiple Cards

With the data in hand we can now loop over the array and render as many `Card Components` as we need and pass them the props needed for each card.

Inside of the `App` Component we will loop over the `cardsArr` array and create multiple Cards in one shot.

Each prop is defined on it's own and passed it's corresponding value.

Let's also console the `cards` so see what React magic has been performed.

```js
const cards = cardsArr.map((ele, index) => {
  return (
    <Card1 img={ele.img} title={ele.title} text={ele.text} url={ele.url} />
  );
});

console.log("this is cards:", cards);
```

Now take a look in DevTools and you should see the following:

<img src="https://i.imgur.com/gx42Kme.png" />

Each object appears to contain much more info then we passed and each one has a `typeof` set to `Symbol(react.element)`. `Symbols` were a new data type introduced in ES6 and are meant to be unique, meaning there will not be `Symbol` in this array with the same exact info.

Something will be needed to distinguish it as unique. React does so by assigning a key called `key`.

It is currently set to `null` and React will warn in just a bit when we render the Cards based on the following rule:

🚔 Any Components created within a .map() must be assigned a unique key.

Before we render the Cards we first need to update `Card1` to pass the data down the props it's received to it's corresponding children.

```js
const Card1 = (props) => {
  console.log("this is props:", props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  );
};
```

**CardBody**

Let's update `CardBody` to make use of the props.

```js
const CardBody = (props) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <Button url={props.url} />
    </div>
  );
};
```

<hr>

### Final React Architecture

As we have made some design changes let's take a look at our final React Architecture design that takes into account all Components and the props being passed.

<img src="https://i.imgur.com/WlfxS7X.png" width=600/>

The above was created using [Google Draw](https://docs.google.com/drawings/d/1pG32gpXhkLqtBR2g_SrXWVeX6sza3TAq3zpP0Sjq3QM/edit?usp=sharing)

The architecture represents all the Components and the props that are being passed to each one. This makes it much easier to understand the flow of data in our app.

### Bonus - The ...spread Operator and Object Destructuring

Since passing props is a requirement in React there are a few shortcuts we can make when passing them.

#### Using The ...spread Operator

The first is that we can use the `...spread` operator to pass many key:value's down instead of writing them out one at a time.

In `Card.js` let's replace all those hard coded props, except `key`, with the `...spread` operator.

```js
const cards = cardsArr.map((ele, index) => {
  return <Card1 {...ele} key={index} />;
});
```

#### Using Object Destructuring

The other shorthand we can use is to update the Child components to create variables based on the key:value pairs that are in the `props` object.

**CardBody**

Let's update `CardBody` to make use of Object Destructuring. Here we use an object as parameter that includes all the prop key names that are being passed down.

```js
const CardBody = ({ title, text, url }) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Button url={url} />
    </div>
  );
};
```

<hr>
