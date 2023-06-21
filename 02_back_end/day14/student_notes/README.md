[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

## Fruits CRUD App

As part of todays class, we will be undertaking the task of recreating the fruits app that we previously developed.

However, we will be utilizing `MongoDB` and `Mongoose` as our backend technologies, providing us with a more robust and efficient solution.

This upgrade will enable us to leverage the power of a NoSQL database and benefit from the features and functionality offered by Mongoose, a powerful Object-Document Mapping (ODM) library.

By incorporating MongoDB and Mongoose into our project, we aim to enhance the app's performance and scalability while ensuring a more professional and industry-standard implementation.

The `CRUD fruits app` is a simple web application that allows users to perform CRUD operations on a collection of fruits. The app is built using Node.js and Express as the server-side framework, MongoDB as the database, and Mongoose as the Object-Document Mapping (ODM) library for MongoDB.

## Router

- **Express Router** is a powerful middleware provided by the Express.js framework.

- It simplifies the management and organization of routes in an Express application by offering a modular approach.

- By utilizing the Router, you can improve code maintainability, handle route-specific middleware, implement nested routes, and promote code reusability.

- Incorporating `Express Router` in your application allows for better scalability, readability, and maintainability of your routing code.

### Why we need ROuter?

The primary purpose of Express Router is to organize and modularize routes within an Express application. As projects grow in complexity, handling multiple routes and their corresponding request handlers becomes challenging. The Router helps to structure the application by dividing routes into logical groups and handling them separately. This improves code readability, maintainability, and makes it easier to manage and scale the application.

### How to use router?

To utilize Express Router in your application, follow these steps:

1. Import `Express` and Create a Router: Start by importing the Express module and creating an instance of the Router.

```javascript
const express = require("express");
const router = express.Router();
```

2. Define Routes: Use the Router instance to define your routes using the HTTP methods (e.g., `get`, `post`, `put`, `delete`).

```javascript
router.get("/users", (req, res) => {
  // Route handler for GET /users
  // Handle the request and send a response
});

router.post("/users", (req, res) => {
  // Route handler for POST /users
  // Handle the request and send a response
});
```

3. Mount the Router: Mount the router on a specific path in your main Express application.

```javascript
app.use("/api", router);
```

In this example, all routes defined in the router will be prefixed with /api, such as /api/users for the routes defined above.

By following this approach, you can define additional routes in separate files and mount them as needed, promoting modularity and maintainability.
