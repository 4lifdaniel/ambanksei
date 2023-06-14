[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

## Framing

Over the past few weeks we've learned how to build our own websites, using a variety of technologies. But the content on these sites has been limited to whatever we type into the html directly. What if there were another way? (there is)

Today, we're going to learn how to request information from third-party databases, and how to make our applications more dynamic by making it so our application doesn't need to refresh the page to make a request to an API server!

With these functions we will be able to access information from all over the web and display it within our apps, sites, and projects!

## What is an API

**API** stands for "Application Programming Interface" and is a way of describing software design. At the highest level, an API is any application with a set of instructions for how programmers can interact with it (e.g., getting data). The DOM is actually an example of an API.

Many web sites have their own data, but they can pull in other data. For example, many news sites have a weather widget. This widget gets its data from a weather resource. There are many APIs that can be used by individuals and companies. Some are totally free (Pokemon, Harry Potter, Weather), some are available for a small fee (Spotify, the Joke DB), and some are really expensive (super super ultra fast Stock Market + Currency Exchange DB's).

There are APIs for

- Weather
- Stocks
- Crytpocurrency
- Beer
- Dictionaries
- Books
- Sports
- Art
- Games
- Movies

Here is a good list of [Free Apis](https://github.com/toddmotto/public-apis)

### API Data

An API will receive a scripted request and send a response. But what makes an API different from a full-stack application, is that an API won't render views,it'll just send back data. That data will generally be in one of two forms: XML or JSON.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It is increasingly the less common of the two formats you'll encounter. It is still a major format due to its legacy usage across the web.

You'll probably always favor using a JSON API, if available.

XML looks like this:

```xml
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

#### JSON

All data sent via HTTP is sent as strings. However, what we really want to pass between web applications is **structured data** (i.e., arrays and objects). In order to do so, native data structures are **serialized**: converted from a javascript object into a string representation of the data (aka serialization), called **JSON** which stands for "JavaScript Object Notation". This string can be transmitted and then parsed back into data (de-serialized).

**JSON** has become a universal standard for sending and receiving data across the web. It is light-weight, easy-to-read and quick to parse.

JSON is just a long string of characters. It is based off the JavaScript Object syntax. One notable difference is that double quotes must always be used for keys and values.

JSON looks like this:

```json
{
  "users": [
    { "name": "Bob", "id": 23 },
    { "name": "Tim", "id": 72 }
  ],
  "content": "This is a piece of content"
}
```

## What is AJAX

**AJAX** stands for "Asynchronous JavaScript and XML".

Back in the early- and mid-1990s, the only way for a user to request new data was through the server-based request-response cycle. The user would click on a link or change some data in the UI and the whole page would reload. This was inefficient for the user and the User Experience; it was also an inefficient use of bandwidth, as an entire rendered page had to be transmitted rather than just the new or updated data.

This is where AJAX came in to play. AJAX is a way for us to make HTTP requests in JavaScript. So we can make requests to our server (asynchronously) without having to reload the page!

AJAX was first implemented in Internet Explorer as the `XMLHttpRequest` object and later adopted by Mozilla and Safari. In 2005, Gmail and Google Maps were rebuilt using `XMLHttpRequest` and a developer named Jesse James Garret wrote an article titled _"[Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)"_, where he coined the term _AJAX_.

Building apps with `XMLHttpRequest` lead to a better user experience and faster applications but it was extremely verbose and cumbersome to work with. To make it easier, jQuery implemented the `.ajax()` api, abstracting away
`XMLHttpRequest` into a chainable set of function calls. We won't be using jQuery in this course since it's an outdated library, but you can read more about `.ajax()` if interested: [http://api.jquery.com/jquery.ajax/](http://api.jquery.com/jquery.ajax/)

More recently, WHATWG (the standards body for HTML) introduced the `fetch()` api as a browser-native implementation of AJAX similar to the jQuery api. Fetch has gained a lot of popularity in the past few years because its easy to use and doesn't require loading in jQuery. Today we will focus on fetch for our api calls.

- AJAX is not a programming language.
- AJAX is a technique for accessing web servers from a web page.
- AJAX stands for Asynchronous JavaScript and XML.

XML was once a popular way to store and send data over the internet and it is still used. However, JSON has become the predominant way to send data over the internet. Even though JSON has become the preferred method of data transfer, no one seems in a hurry to start calling AJAX as AJAJ.

### AJAX Introduction

AJAX just uses a combination of:

- A browser built-in XMLHttpRequest object (to request data from a web server).

- JavaScript and HTML DOM (to display or use the data).

AJAX allows web pages to be updated asynchronously by exchanging data with a web server
behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

### How AJAX Works:

1. An event occurs in a web page (like the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

### The key steps of AJAX is the XMLHttpRequest object.

1. Create an XMLHttpRequest object

```js
Const req = new XMLHttpRequest();
```

2. Define a callback function

```js
req.onload = function () {
  //What to do when the response is ready
};
```

3. Open the XMLHttpRequest object

```js
req.open("GET", "api_link");
```

4. Send a Request to a server

```js
req.send();
```

AJAX is a developer's dream because you can:

- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

With the XMLHttpRequest object you can define a callback function to be executed, when the request receives an answer.

The callback function is defined in the `onload` property of the XMLHttpRequest object.

**onload**: Defines a function to be called when the request is received (loaded)

**onreadystatechange**: Defines a function to be called when the readyState property changes

**readyState**: Holds the status of the XMLHttpRequest.
0: request not initialized.
1: server connection established.
2: request received.
3: processing request.
4: request finished and response is ready.

**status**: Returns the status-number of a request:
200: "OK"
403: "Forbidden"
404: "Not Found"

**statusText**: Returns the status-text (e.g. "OK" or "Not Found").

**responseText**: Returns the response data as a string.

**responseXML**: Returns the response data as XML data.

### JSON:

JSON stands for `JavaScript Object Notation`. It is a lightweight way for storing and transporting data. JSON is just a long string of characters. It is based off the JavaScript Object syntax. One notable difference is that double quotes must always be used for keys and values.

When we use AJAX, we will be sending and receiving JSON. AJAX allows us to only reload portions of a web page. Another example might be a stock ticker on a news website.

A common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string.
Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.

### GET or POST?

GET is simpler and faster than POST and can be used in most cases. However, always use POST requests when:
• A cached file is not an option (update a file or database on the server).
• Sending a large amount of data to the server (POST has no size limitations).
• Sending user input (which can contain unknown characters), POST is more robust and secure than
GET.

POST: POST is used to post data to the api server

When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with `JSON.stringify()`.

### Modern Browsers (Fetch API)

Modern Browsers can use Fetch API instead of the XMLHttpRequest Object. The Fetch API interface allows web browser to make HTTP requests to web servers. If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

```js
//AJAX Fetch: Prints the promise
function ajaxFetchCall() {
  const url = "https://reqres.in/api/users";

  fetch(url).then(function (response) {
    console.log(response.json());
  });
}
```

This will print our promise here, if we want to process our output then we can return the `response.json()` and retrieve the data from it using `.then` as shown below:

```js
//AJAX print the response:
function ajaxFetchCall() {
  const url = "https://reqres.in/api/users";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then((response_data) => {
      console.log(response_data);
    });
}
```

**Make sure you are returning the response.json, if not we won't receive the response data in next then.**

#### Reference:

- [HTTPS Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTPS Response Codes2](https://www.restapitutorial.com/httpstatuscodes.html)
- [Http Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [JSON Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Countries API](https://restcountries.com/)
- [JSON Test API](https://jsonplaceholder.typicode.com/)
- [OMDB API](https://www.omdbapi.com/)
