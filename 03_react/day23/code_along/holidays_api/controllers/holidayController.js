const express = require("express");
const holidays = express.Router();

//Import the model
const pgConnection = require("../models/HolidayModel");

//Route when /holidays is called
holidays.get("/", pgConnection.getHolidays);

//To call create holiday method
holidays.post("/", pgConnection.CreateHoliday);

//To delete holiday
holidays.delete("/:id", pgConnection.deleteHolidays);

//To update holiday
holidays.put("/:id", pgConnection.updateHolidays);

module.exports = holidays;
