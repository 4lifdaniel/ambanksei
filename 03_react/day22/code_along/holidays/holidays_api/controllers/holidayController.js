const express = require("express");
const holidays = express.Router();

//Import the Holidays model
const HolidayModel = require("../models/holidayModel");

//To retrieve all holidays details
holidays.get("/", (req, res) => {
  //   res.send("Happy Holidays. I Wish!!!");
  HolidayModel.find()
    .then((foundHolidays) => {
      res.status(200).json(foundHolidays);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

//To post data
holidays.post("/", (req, res) => {
  //   console.log(req.body);
  HolidayModel.create(req.body)
    .then((createdHoliday) => {
      res.status(201).send(createdHoliday);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

//To Delete holiday details
holidays.delete("/:id", (req, res) => {
  HolidayModel.findByIdAndRemove(req.params.id)
    .then((deletedHoliday) => {
      //   console.log(deletedHoliday);
      res.status(200).json(deletedHoliday);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

//To update holiday details
holidays.put("/:id", (req, res) => {
  HolidayModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedHoliday) => {
      res.status(200).json(updatedHoliday);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

module.exports = holidays;
