const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: "string",
  modal: "string",
  balance: Number,
  brand: "string",
  edition: "string",
  model_year: Number,
  registration_year: Number,
  condition: "string",
  transmission: "string",
  body_type: "string",
  fuel_type: "string",
  engine_capacity: Number,
  kilometers_run: Number,
  price: Number,
  manufacturer: "string",
  cost: {
    cost: [],
  },
  days: {
    carUse: [],
  },
  accident: {
    carAccident: [],
  },
  fullMonth: {
    cost: [],
  },
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
