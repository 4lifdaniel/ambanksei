# REST

### What is REST?

REST stands for Representational State Transfer.

REST (i.e. Representation State Transfer) is an architectural style for defining our routes. It is a way of mapping HTTP routes and the CRUD functionalities.

REST is not a protocol, its guidelines to build performant and scalable system(api).

REST is a guideline/framework to build a performant and scalable system on web.

If you build your web services based on REST then it is called RESTFUL web services

REST is a guidline and RESTFUL is a implementation of guide line

`Roy Fielding` in 2000 as part of his Phd project

Representational: We are tranfering the state(current data) in JSON format.

State: The current data(or current information) of a resource.

Transfer: We are transferring the data back to client/requestor.

### Guidelines:

1. Consistent API.
2. Independent client and Server.
3. Stateless.
4. Cacheable.
5. Layered System.
6. Code on demand(optional).

### What are routes?

Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

### What is CRUD?

When building APIs, we want to provide the four basic types of functionality. There must be a way to Create, Read, Update, and Delete resources.

In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.

### The 7 RESTful routes

| **URL**          | **HTTP Verb** | **Action** |
| ---------------- | ------------- | ---------- |
| /fruits/         | GET           | index      |
| /fruits/new      | GET           | new        |
| /fruits          | POST          | create     |
| /fruits/:id      | GET           | show       |
| /fruits/:id/edit | GET           | edit       |
| /fruits/:id      | PATCH/PUT     | update     |
| /fruits/:id      | DELETE        | destroy    |

### How this helps?

By following this pattern, you don’t have to reinvent the wheel every time you build a new CRUD app. The routes and method names have already been decided, so you can just focus on the app itself.

Since all CRUD apps are capable of doing the same four basic actions, these routes can be used for all your projects.

# EJS

EJS (Embedded JavaScript Templating) is one of the most popular template engines for JavaScript. As the name suggests, it lets us embed JavaScript code in a template language that is then used to generate HTML.

EJS has its own defined syntax and tags. It offers an easier way to generate HTML dynamically. Relation between HTML and EJS: We actually define HTML in the EJS syntax and specify how and where various data will go on the page.

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

EJS is used to display dynamic content.

EJS is mostly useful whenever you have to output HTML with a lot of javascript.

# MVC

- One of the core tenants of good programming is to compartmentalize your code
- Already our code is getting a little messy
  - we have data, app instantiation (listening), and routes all in one file
- One way to keep an app from getting messy is to separate it out into three sections
  - Models
    - data (javascript variables)
  - Views
    - how the data is displayed to the user (HTML)
  - Controllers
    - the glue that connects the models with the views
- This allows various developers to divide up a large code base
  - minimizes likelihood of developers overwriting each others code
  - allows developers to specialize
    - one can focus just on getting good with dealing with data
    - one can focus just on getting good with html
    - one can focus just on getting good with connecting the two
- Think of MVC as a restaurant
  - Models are the cook
    - prepares food/data
  - Views are the customer
    - consumes food/data
  - Controllers are the waiter
    - brings food from cook to customer
    - has no idea how food/data is prepared
    - has no idea how the food/data is consumed
