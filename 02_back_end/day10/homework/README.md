[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# First Express Homework

Practice the Basics of Express

#### Learning Objectives

- Set up some express servers for practice
- make some get routes
- use url/query parameters

#### Prerequisites

- Nodejs
- npm packages
- Introduction to expressjs
- Request/response/ how the internet works basics
- Basic understanding of routing
- JavaScript, HTML fundamentals

---

## Technical Requirements

1. Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
2. Must get functionality required for each section working

## Learning Objectives

- Practice setting up express applications.
- Practice creating custom routes.
- Practice using parameters from a request.

## Getting Started

In the `homework` directory for today, create a Javascript file `server.js`. Write your answers inside this one js file.

- `npm init`. You should receive a `package.json`.

Install express. `npm i express`. Check your files.

- _Remember:_ If you have an older npm version below 5.0.0, you need to type `npm install express --save` instead! Refer back to your [notes](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/unit_2/w04d05/instructor_notes/INTRO_TO_EXPRESS.md) if you need to be reminded of the differences between version 4 and 5

:elephant: _Hint_: You can check to make sure your installation was successful in one of the following places:

- Your `package.json` file should have `express` listed in the dependencies.
- You could also check in your `node_modules` folder to see an`express` folder.
- Require `express` and set the `app`. (look back to the markdown from today if you need more help on how to do this).
- Tell the server where to listen for requests (the port).

## Greetings

2. Make a route `'/greeting'` that sends a generic greeting to the screen like "Hello, stranger".

3. Give the `greeting` route a param `/:name`

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit** <br>

<hr>
"Greeting express application created."
<hr>

## Tip Calculator

2. Your app should have a route of `'/tip'` and it should expect _2 params_. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should _display how much your tip will be_ based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

&#x1F534; **Commit** <br>

<hr>
"Tip Calculator express application created."
<hr>

## Magic 8 Ball

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3. So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.

4. We can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.

- Send the magic 8 ball response back between html `<h1>` tags
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit** <br>

<hr>
"Magic 8 Ball express application created."
<hr>

## Take one Down and Pass it Around

Origins: WDI-DC Campus<br>

Build an express application that enables users to count down the number
of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

## Instructions

- `mkdir pass-it-around`
- `cd pass-it-around`
- `npm init -y`
- build a basic express server

### Requirements

- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.

#### Hints

- You should use an `anchor` tag with an `href` to link to the next 'page'

#### Bonus

- Have some more fun

Update your page to be something like

```
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
```

Make the bugs go down by one, but then have some sort of functionality where the bug count can `randomly` go up

You have a lot of freedom to make it work how you want!

---

_Copyright 2023, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
