# Express - Sessions

## What is a session?

A Session is one of the `server-side state management techniques` that stores the user specific data across the user request.

Cookies are little strings of data that get stored on your computer so that, when you return to a web page, it will remember what you did the last time you were there. You can specify how long a cookie will stay around on a browser before it "expires" or is deleted. This can be a specific date, or it can end as soon as the user closes their browser.

The problem with cookies is that if you store sensitive information in them (usernames, etc), someone could take the computer and view this sensitive information just by opening up the web browser. Sessions are basically cookies, but the server stores the sensitive info in its own memory and passes an encrypted string to the browser, which gets stored in the cookie. The server then uses this encrypted string to know what was saved on the user's computer.

Sessions typically only last for as long as the user keeps their window open, and aren't assigned a specific date to expire. **BE CAREFUL: IF YOU RESTART YOUR SERVER, IT WILL LOSE ALL MEMORY OF THE SESSIONS IT CREATED, AND USERS' SESSIONS WILL NOT WORK**

### Cookie:

A cookie is a `key-value pair` that is stored in the browser. The browser attaches cookies to every HTTP request that is sent to the server.

In a cookie, you `can’t store a lot of data`. A cookie cannot store any sort of user credentials or secret information. If we did that, a hacker could easily get hold of that information and steal personal data for malicious activities.

cookies are usually `limited to 4096 bytes` and you `can't store more than 20 cookies per site`.

### Session:

On the other hand, the `session data is stored on the server-side`, i.e., a database or a session store. Hence, it can accommodate larger amounts of data. To access data from the server-side, a session is authenticated with a secret key or a session id that we get from the cookie on every request.

## Express-session

Express-session - an HTTP server-side framework used to create and manage a session middleware.

Express Session is a middleware for session management in Node.js web applications using the Express.js framework. Sessions allow you to store user-specific data and maintain stateful information across multiple requests and responses.

When a user visits a website, a session is created to track their interactions and maintain their context. Express Session provides a way to store session data on the server and associate it with a unique session identifier (usually stored as a cookie in the user's browser).

# Bcrypt

bcrypt is a package that will encrypt passwords so that if your database gets hacked, people's passwords won't be exposed

## Include bcrypt package

Standard install

```
npm i bcrypt
```

and require

```javascript
const bcrypt = require("bcrypt");
```

## Hash a string using bcrypt

bcrypt does this thing called "salting" a string. It requires you to generate a salt which is used in the encryption process. This must be generated each time you hash a string. If you don't do this, the same string will get hashed to the same value each time. If this were to happen, someone with a common password could hack the database and see who else's hashed password had the same value as theirs and know that they have the same password as them.

```javascript
const hashedString = bcrypt.hashSync("yourStringHere", bcrypt.genSaltSync(10));
```

## Compare a string to a hashed value to see if they are the same

Because the same string gets encrypted differently every time, we have no way of actually seeing what the value of the string is. We can compare it to another string and see if the two are "mathematically" equivalent.

```javascript
bcrypt.compareSync("yourGuessHere", hashedString); //returns true or false
```

## Reference:

- [Express Session](https://github.com/expressjs/session#readme)
- [Bcrypt in a little more depth - Thanks Eric Lewis!](https://all-about-bcrypt.glitch.me/)
