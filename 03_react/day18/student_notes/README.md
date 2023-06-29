[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

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
