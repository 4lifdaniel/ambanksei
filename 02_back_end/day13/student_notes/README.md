[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Mongo Database

## What is a Database

A database is an organized collection of data, stored and accessed electronically.

For our CRUD apps so far we've been hard coding some data. We've been able to make temporary changes, but as soon as we shut down our servers, those changes are gone.

We need a way to make our data persist.

We'll do that by storing/accessing our data from a database.

There are many databases. A common type is a `SQL(Structured Query Language)` database which stores data in tables and rows, much like an excel spreadsheet/google sheet.

Another type of database is a `NoSQL(Not Only SQL)` database, which follows a different structure. In our case, we'll be using MongoDB which will store our data in objects (just as we've been seeing with our mock databases)

You can connect to it in the same way that you would connect to a website, but instead of viewing a page, you can save, retrieve, update, and delete javascript objects to/from/in the database.

## What is Mongo

MongoDB is a database that holds `JavaScript Objects`. The database itself is an application that runs quietly on a computer and waits for connections that make requests and then sends responses (much like a web server).

Mongo is designed to be a database that is flexible and easily scalable.

### BSON instead of JSON:

BSON stands for “Binary JSON,” and that’s exactly what it was invented to be. BSON’s binary structure encodes type and length information, which allows it to be traversed much more quickly compared to JSON.

# Mongo Collections and Documents

MongoDB is considered a NoSQL (not only SQL, non SQL or non relational), rather than storing things in tables with rows and columns, NoSQL databases use other means. In the case of MongoDB, data is stored in JavaScript objects.

A collection is a set of documents. Documents are a set of data records. This is very abstract. Let's use a simplified real world example of an address book.

Here is one document:

```js
 firstName: "Jennifer",
 lastName: "Juniper",
 address: "Upon the Hill",
 state: "California",
 telephone: "867-5309",
 birthday: "June 8, 1968",
 email: "jenny.juniper@juno.net"

```

A collection, **would be many documents**: In our case, many contacts.

**Remember: having a collection of documents sounds quite reasonable. But having a document of collections is ... kind of odd**.

Since you're coming from a background where you are used to thinking of data in terms of columns and rows, reading the following could be helpful in transitioning into this new way of modeling data:

[Thinking in Documents Part 1](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs&_ga=2.202168721.1294830246.1530196908-30583944.1529350623)

[Thinging in Documents Part 2](https://www.mongodb.com/blog/post/thinking-documents-part-2)

# Mongoose

### what is an ODM?

ODM stand for Object Document Model. It translates the documents in Mongo into upgraded JavaScript Objects that have more helpful methods and properties when used in conjunction with express.

Rather than use the Mongo shell to create, read, update and delete documents, we'll use an npm package called `mongoose`. Mongoose will allow us to create schemas, do validations and make it easier to interact with Mongo inside an express app.

## Reference:

- [Mongo DB Login](https://account.mongodb.com/account/login)
- [Mongo Cheatsheet](https://www.mongodb.com/developer/products/mongodb/cheat-sheet/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
