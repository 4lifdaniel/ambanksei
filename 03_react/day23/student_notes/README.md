[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Intro to Relational Databases and SQL

## Learning Objectives

| Students will be able to:                                    |
| ------------------------------------------------------------ |
| Describe the use case of databases                           |
| Describe the anatomy of a relational database                |
| Describe the use case of SQL                                 |
| Use the `psql` Interactive Terminal                          |
| Use SQL to create a database and a table                     |
| Use SQL to perform CRUD data operations                      |
| Use a SQL `JOIN` clause to combine data from multiple tables |

## Road Map

1. Intro to SQL/Relational Databases
2. Anatomy of a Relational Database
3. Structured Query Language (SQL)
4. Essential Questions
5. Further Study

## 1. Intro to SQL/Relational Databases

### What is a Database?

The vast majority of applications manipulate and display data.

Early on, our programs held data in "memory" using data structures such as arrays and objects. However, when the app was exited, any changes to the data were lost - databases avoid this...

Simply put, **a database provides permanent storage for data**.

### Different Types of Databases

[This site](https://db-engines.com/en/ranking) ranks databases according to their popularity.

As you can see, there are several different types of databases and several "brands" within each type.

Most database technologies can be broken down into two main categories:

- Relational databases
- NoSQL databases

Relational databases are by far the most popular type of database technology. Conceived by [E.F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd) while working for IBM back in 1970.

In SEI, we'll be using [PostgreSQL](https://www.postgresql.org/) since it's arguably the best open-source relational database management system (RDBMS) available.

## 2. Anatomy of a Relational Database

### Schema

The structure of a particular database is defined by its **schema**.

Schemas define the database's:

- Tables, including the number and data type of each column
- Indexes for efficient access of data
- Constraints (rules, such as whether a field can be null or not)

### Tables

The primary container for data in a relational database is a **table**:

<img src="https://i.imgur.com/uL3fvU4.png">

As you can see, database tables look a lot like a spreadsheet since they consist of columns and rows.

A single table in a relational database holds data for a particular _data resource_, for example, **customers**, **orders**, **reviews**, etc.

TABLE: **artists**

| id (PK) | name           | nationality |
| ------- | -------------- | ----------- |
| 1       | Prince         | American    |
| 2       | Sir Elton John | British     |

TABLE: **songs**

| id (PK) | name                | year_released | artist_id (FK) |
| ------- | ------------------- | ------------- | -------------- |
| 1       | Tiny Dancer         | 1971          | 2              |
| 2       | Little Red Corvette | 1982          | 1              |
| 3       | Raspberry Beret     | 1985          | 1              |
| 4       | Your Song           | 1970          | 2              |

### Rows (Records)

A row in a table represents a single instance of the data entity.

For example a particular **artist** in the **artists** table.

### Columns (Fields)

The columns of a table have a:

- Name
- Data type (all data in a column must be of the same type)
- Optional constraints

The typical naming convention is usually snake_cased and singular.

PostgreSQL has [many data types](https://www.postgresql.org/docs/11/datatype.html) for columns, but common ones include:

- `integer`
- `decimal`
- `varchar` (variable-length strings)
- `text` (same as `varchar`)
- `date` (does not include time)
- `timestamp` (both date and time)
- `boolean`

Common constraints for a column include:

- `PRIMARY KEY`: column, or group of columns, uniquely identify a row
- `REFERENCES` (Foreign Key): value in column must match the primary key in another table
- `NOT NULL`: column must have a value, it cannot be empty (null)
- `UNIQUE`: data in this column must be unique among all rows in the table

### Primary Keys (PK) and Foreign Keys (FK)

The field (or fields) that uniquely identify each row in table are know known as that table's **primary key (PK)**.

Since only one type of data entity can be held in a single table, related data, for example, the **songs** for an **artist**, are stored in separate tables and "linked" via what is known as a **foreign key (FK)**. Note that foreign key fields hold the value of its related parent's PK.

### ❓ Database Review Questions (1 min)

<details>
<summary>
(1) A __________ defines the structure of a particular database.
</summary>
<hr>

**schema**

<hr>
</details>

<details>
<summary>
(2) A table in a database consists of __________ and __________.
</summary>
<hr>

**rows** and **columns**

<hr>
</details>

<details>
<summary>
(3) A __________ key uniquely identifies a row within a table.
</summary>
<hr>

**primary** key

<hr>
</details>

<details>
<summary>
(4) A __________ key references the primary key of a related table.
</summary>
<hr>

**foreign** key

<hr>
</details>

## 3. Structured Query Language (SQL)

### What is SQL?

**SQL (Structured Query Language)**, also pronounced "sequel", is a programming language used to CRUD data stored in a relational database.

SQL syntax is similar to the English language.

Although SQL is fairly standard, it can vary from depending on the particular RDBMS (Relational Database Management System). For example, the _SQLite_ RDBMS implements fewer SQL commands than that of _PostgreSQL_.

### The `psql` Interactive Terminal

There are [several GUI tools available](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) for working with PostgreSQL, however, in SEI we won't need one because we'll be primarily accessing the database using code (Python/Django) and we'll be using Terminal today to learn a touch of SQL commands instead of using a GUI.

`psql` is a tool that runs in terminal and allows us to work with PostgreSQL databases by typing in commands. It was installed with PostgreSQL.

Open a terminal session and type: `psql`.

You'll see your PostgreSQL version and psql's prompt:

```
$ psql
psql (14.5)
Type "help" for help.

jimclark=#
```

Here are some useful commands (note the use of a **backslash**):

```sql
help -- general help
\?   -- help with psql commands
\h   -- help with SQL commands
\l   -- Lists all databases
\c   -- Connect to a database
\d   -- List tables in database
\q   -- exits psql
q    -- exits a psql list or dialogue
```

### Creating a Database and a Table

Let's create a database named `music` and a `bands` table:

```sql
CREATE DATABASE music; -- Don't forget the semicolon!

\l -- What changed?

\c music -- Connect to the music database

\d -- Lists all tables

-- Define a table's schema
CREATE TABLE bands (
  id serial PRIMARY KEY,  -- serial is auto-incrementing integer
  name varchar NOT NULL,
  genre varchar
);

\d -- There should now be a bands table
```

The backslash commands, e.g. `\d`, are psql commands.

The `CREATE DATABASE` and `CREATE TABLE` are SQL commands.

### Basic Querying and Inserting Data

Now let's write some more SQL to query (`SELECT`) and create data (`INSERT INTO`):

```sql
SELECT * FROM bands; -- The * represents all fields

-- For text, use single quotes, not double
INSERT INTO bands (name) VALUES ('The Smiths');

INSERT INTO bands (name, genre) VALUES ('Rush', 'prog rock');

SELECT * FROM bands; -- Use the up arrow to access previous commands
```

> 👀 Comments in SQL begin with `--`

Because the `id` column is defined as `serial`, the database automatically assigns the next available integer.

### Creating a Table for a Related Data Entity

Let's say we have the following data relationship: `Band ---< Musician`

_A Band has many Musicians_, and<br>_a Musician belongs to a Band_

Whenever you have a one:many relationship like above, the rows in the table for the many-side must include a column that references which row in the table on the one-side it _belongs to_.

This column is known as a **foreign key (FK)** and it must be of the same data type as the primary key in the related/parent table (typically an **integer**).

Now let's define the `musicians` table:

```sql
-- REFERENCES creates a FK constraint
CREATE TABLE musicians (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  quote text,
  band_id integer NOT NULL REFERENCES bands (id)
);

\d musicians -- details for table
```

The `REFERENCES` constraint is what makes a column a FK.

Now let's attempt to add a musician with a bogus foreign key:

```sql
INSERT INTO musicians (name, band_id) VALUES ('Geddy Lee', 999);
--- The above command will fail because there's no matching PK in the bands table

-- Let's try again, but first, let's verify the ids of the bands
SELECT * FROM bands;

-- Assuming 'Rush' has an id of 2
INSERT INTO musicians (name, band_id) VALUES ('Geddy Lee', 2);

SELECT * FROM musicians;  -- There's Geddy!

-- Now let's add Neil
-- Use two single quotes to embed an apostrophe
INSERT INTO musicians (name, quote, band_id)
VALUES (
'Neil Peart',
'If you''ve got a problem, take it out on a drum',
2);
```

> 👀 It's possible to insert multiple rows by providing comma separated value lists:<br>`...VALUES ('Geddy Lee', 2), ('Neil Peart', 2);`

### Querying Data using a `JOIN` Clause

The `JOIN` clause is used with a `SELECT` to query for data from more than one table.

Let's query for all of the bands with their musicians:

```sql
-- table right of JOIN has the FKs
SELECT * FROM bands JOIN musicians ON bands.id = musicians.band_id;
```

Note that no records are returned for bands without any musicians. This is called an **INNER JOIN**, which is the default.

There are several types of [joins](http://www.postgresqltutorial.com/postgresql-joins/).

If we want to return all bands, regardless of whether or not there's any matches for musicians, we use whats called a `LEFT JOIN`:

```sql
-- Using aliases for the table names
SELECT *
FROM bands b
LEFT JOIN musicians m ON b.id = m.band_id;
```

### Querying Data using a `WHERE` Clause

The [WHERE clause](http://www.postgresqltutorial.com/postgresql-where/) allows selecting records that meet a condition or conditions:

```sql
SELECT *
FROM bands b
LEFT JOIN musicians m ON b.id = m.band_id
WHERE b.name = 'Rush' AND m.name LIKE 'G%';
```

The `LIKE` operator uses:

- `%` to match any number of characters (wildcard)
- `_` to match any single character

### Updating Data

Time to give Geddy a quote by using the SQL `UPDATE` command:

```sql
UPDATE musicians
SET quote = 'I love to write, it''s my first love.'
WHERE name = 'Geddy Lee';
```

### Deleting Data

Be careful with this command because if you don't use a `WHERE` clause, you can accidentally delete all of the data from a table:

```sql
SELECT * FROM bands;

DELETE FROM bands WHERE name LIKE '%Smiths';

SELECT * FROM bands;
```

### SQL - Summary

As much fun as it is to write SQL, most developers don't have many opportunities to do so because they typically software known as an _Object Relational Mapper (ORM)_ to automatically write SQL and communicate with the database server.

Regardless, understanding enough SQL to put it on your resume is what's important!

For additional practice after the lab, check out this interactive site: [PG Exercises](https://pgexercises.com/)

## 4. ❓ Essential Questions (1 min)

<details>
<summary>
(1) A relational database contains a _________ for each data entity/resource that an application has.
</summary>
<hr>

**table**

<hr>
</details>

<details>
<summary>
(2) True or False: In a relational database, all of the data in a particular column in a table must be of the same data type.
</summary>
<hr>

**True**

<hr>
</details>

<details>
<summary>
(3) A single instance of a data entity, e.g., Band, is represented by a ______ in a table.
</summary>
<hr>

**row**

<hr>
</details>

<details>
<summary>
(4) _____ is the "programming" language used by relational databases.
</summary>
<hr>

**Structured Query Language (SQL)**

<hr>
</details>

## 5. Further Study

If you'd like to go deeper into SQL, look into:

- [Functions & Operators](https://www.postgresql.org/docs/11/functions.html)
- [Aggregations](http://www.postgresqltutorial.com/postgresql-aggregate-functions/)

## Additional Practice

- [PG Exercises](https://pgexercises.com/)

- [PostreSQL Tutorial](http://www.postgresqltutorial.com/)

## References

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

# Redux

## Intro To Redux

Redux was created as a `state management` tool for large applications which includes the need to manage complex versions of state and ever increasing complexity of the business logic.

If your learning about Redux then it's safe to assume that you are already familiar with managing state using `useState`, `useReducer` and possibly even `useContext`. This familiarity is important as it uses both the `reducer` and `context` concepts.

`React Context allows you to share data within a specific subtree of components`, while Redux `provides a global state store that is accessible to all components in the application`, including sibling components.

### The Need For Global State

As we can see below the nightmare of passing props further and further down the hierarchy may at some point become confusing and/or unmanageable. Redux creates a `central store` that any component can reference and pull the data they need when they need it.

<img src="https://i.imgur.com/STJ8f7F.png" width=300/>

<img src="https://i.imgur.com/7RpahGf.png" width=400/>

## Redux Terminology

Redux brings with it some new terminology so let's review these new terms first before we implement it.

<p align='center'>
    <img src="https://i.imgur.com/6VoGGIX.png" width=400/>
</p>

#### Store

The store is the `single source of truth our app`. The store encapsulates not only the data in the program, but also controls the flow of the program using `reducers` and `actions`.

#### Actions

`Actions` are simply JavaScript objects that describes what change is being made and includes any data relative to that change. The only `requirement` is that the object must contain a key called `type`.

Any additional key/value pairs that are included are completely optional and dependent on the need of the app.

Here is an action object that intends to increment the counter by 1.

```sh
{ type: 'INCREMENT' }
```

Although this meets the min requirements of an `action` we can extend it to include additional values. So perhaps we want to control by how much the value is incremented. For that we can add a new key called `value`.

```sh
{ type: 'INCREMENT', value: 1 }
```

We can continue that logic and create an action to decrement the counter by 1.

```sh
{ type: 'DECREMENT', value: 1 }
```

#### Reducers

When an action gets dispatched it is sent to a `Reducer` to perform the actions needed as they were set in `type`. The `Reducer` is a pure function that describes how the action will update the store (aka state object)

The Reducer always take the previous state and the action that was dispatched and then returns a brand new state.

The body of the function is always a `switch` statement that evaluates the `type` property in the action and executes the needed business logic.

```sh
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count += 1
      }
    case 'DECREMENT':
      return {
        count: state.count -= 1
      }
  }
}
```

## Reference:

- [Redux](https://react-redux.js.org/introduction/getting-started)
