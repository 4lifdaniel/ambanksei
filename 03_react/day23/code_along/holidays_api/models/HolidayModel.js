const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.postgres_user,
  host: process.env.postgres_host,
  database: process.env.postgres_db_name,
  password: process.env.postgres_password,
  port: process.env.postgres_port,
});

//To Create Holiday
const CreateHoliday = (req, res) => {
  const { name } = req.body;

  //To insert data into database
  pool.query(
    "INSERT INTO holidays (name) VALUES ($1) RETURNING *",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error creating holiday:", error.message);
        res.status(500).json({ error: "Failed to create holiday" });
      } else {
        res.status(201).json(results.rows);
      }
    }
  );
};

//To retrieve holidays
const getHolidays = (req, res) => {
  pool.query("SELECT * FROM holidays ORDER BY id", (error, results) => {
    if (error) {
      console.log("Error retreieving holidays:", error.message);
      res.status(500).json({ error: "Failed to Retrieve holidays" });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

//To delete holiday details
const deleteHolidays = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "DELETE FROM holidays WHERE id= $1 RETURNING *",
    [id],
    (error, results) => {
      if (error) {
        console.log("Error deleting holiday:", error.message);
        res.status(500).json({ error: "Failed to delete holiday" });
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

//To update holiday details
const updateHolidays = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, celebrated, likes } = req.body;

  pool.query(
    "UPDATE holidays SET name = $1, description=$2, celebrated=$3, likes=$4 WHERE id=$5 RETURNING *",
    [name, description, celebrated, likes, id],
    (error, results) => {
      if (error) {
        console.log("Error updating holiday:", error.message);
        res.status(500).json({ error: "Failed to update holiday" });
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

module.exports = { CreateHoliday, getHolidays, deleteHolidays, updateHolidays };
