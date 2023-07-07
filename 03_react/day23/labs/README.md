# PERN Application Lab Activity

### Step 1: Install Required Software

Before we begin, make sure you have the following software installed on your computer:

- Node.js
- PostgreSQL

### Step 2: Create a New Node.js Project

Create a new folder for your project, navigate to it in your terminal, and run the following command:

```
npm init -y
```

This will create a new `package.json` file in your project folder.

### Step 3: Install Required Packages

We need to install the following packages for our application:

- Express: A web framework for Node.js
- pg: A PostgreSQL client for Node.js
- dotenv: To load environment variables from a . env file into the process. env object.
- cors: A middleware for enabling cross-origin resource sharing
- nodemon (dev): A utility for automatically restarting the server during development
  Run the following command to install these packages:

```
npm install express pg cors nodemon
```

### Step 4: Set up the Server

Create a new file called index.js in your project folder and add the following code:

```js
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

This sets up an Express server on port 5000, with middleware for parsing JSON requests and enabling CORS.

### Step 5: Connect to the Database

We need to connect to a PostgreSQL database. Add the following code to index.js:

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: "your_user",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database", err));
```

Make sure to replace your_user, your_database, and your_password with your own PostgreSQL credentials.

### Step 6: Create a Database Table

Create a new file called db.sql in your project folder and add the following SQL code:

```sql

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false
);
```

This creates a new table called `todos` with three columns: `id, description, and completed`.

Run the following command in your terminal to create the table in your PostgreSQL database:

```
psql -U your_user -d your_database -f db.sql
```

### Step 7: Create API Endpoints

Add the following code to `index.js` to create API endpoints for `retrieving`, `creating`, `updating`, and `deleting` todos:

```js

app.get('/api/todos', (req, res) => {
  pool.query('SELECT * FROM todos ORDER BY id ASC', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.post('/api/todos', (req, res) => {
  const { description } = req.body;

  pool.query('INSERT INTO todos (description) VALUES ($1)', [description], (err, result) => {
    if (err) throw err;
    res.send(result);
});

});

app.put('/api/todos/:id', (req, res) => {
const { id } = req.params;
const { completed } = req.body;

pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [completed, id], (err, result) => {
if (err) throw err;
res.send(Todo ${id} updated);
});
});

app.delete('/api/todos/:id', (req, res) => {
const { id } = req.params;

pool.query('DELETE FROM todos WHERE id = $1', [id], (err, result) => {
if (err) throw err;
res.send(Todo ${id} deleted);
});
});
```

These endpoints use the `pg` package to interact with the `todos` table in the PostgreSQL database.

### Step 8: Start the Server

Add the following script to your `package.json` file:

```json
{
  "scripts": {
    "start": "nodemon index.js"
  }
}
```

Run the following command to start the server:

```
npm start
```

You should see a message in your terminal indicating that the server is listening on port 5000.

### Step 9: Test the Endpoints

You can test the endpoints using a tool like Postman or curl.

Here are some example requests:

- GET /api/todos: Retrieve all todos
- POST /api/todos: Create a new todo (send JSON body with description property)
- PUT /api/todos/:id: Update a todo (send JSON body with completed property)
- DELETE /api/todos/:id: Delete a todo
