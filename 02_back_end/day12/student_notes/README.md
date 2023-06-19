![General Assembly](/ga_cog.png)

## CURL

### What is CURL:

- It is a command line tool that acts like a browsers requests.
- cURL stands for `client for URL Docs`.
- We can use it to make requests to website.
- All it does is send a request and then take the response and write it to the terminal.

### When can we use cURL:

- If we want to create a route and test if it works.
- In case of GET request, we can just type the route into URL bar in the browser and see if it works.

In case of POST requests we can't make the request by entering path in browser url bar.

The only way to test POST request in the browser is via forms.

For creating a form we need to write lot of code, even before we test it.

For example:

1. Create a new route.
2. Create a new ejs file with forms.
3. Have the forms point to correct POST route.
4. Go to the route in browser and fill out the form.
5. Submit the form.

To make a POST request, we will need to add some arguments to the terminal command

```bash
curl -X POST <url>
```

The -X POST argument tells curl to make a POST request to the server

By using cURL we can make a POST request directly to the server without needing to go through all the setup.

## Middleware

### what is a middleware

The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

### why we need middleware

Middleware can also send the response to the server before the request. The next middleware function is commonly represented as a variable named next. Simply middleware is a function that can only be applied using routes. We can access and modify request and response data using middleware.

Middleware functions can perform the following tasks:

1. Execute any code.
1. Make changes to the request and the response objects.
1. End the request-response cycle.
1. Call the next middleware in the stack.

We know how to create functionality for each route, but sometimes we want to execute some functionality to execute for every route.

We can do this by using `app.use`.

### URL Encoded

Previously we used to install a package called `body-parser`, but now it is inbuilt function(since 4.16), so to access the body we need to use below code:

```js
app.use(express.urlencoded({ extended: false }));
```

This will take incoming strings from the body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body.

extended: `false` - has to do with how the data is being parsed (and what kind can be parsed). For this unit, we'll just set this to false.

### Create a static files folder for CSS/JS

- CSS/JS code doesn't change with server-side data
- We can toss any static files into a 'public' directory
  - static means unchanging
  - dynamic means changing depending on data

### Method-Override

The method-override middleware lets us use HTTP verbs like PUT and DELETE with clients that don’t support it.

When we click "DELETE" on our index page (`index.ejs`), the form needs to make a DELETE request to our DELETE route.

The problem is that forms can't make DELETE requests. Only POST and GET. We can override this, though using an npm package called `method-override`

### Reference:

- [CURL](https://everything.curl.dev/)
- [URL Encoded](https://expressjs.com/en/api.html#express.urlencoded)
- [Static Files](https://expressjs.com/en/starter/static-files.html)
- [Method Override](https://www.npmjs.com/package/method-override)
