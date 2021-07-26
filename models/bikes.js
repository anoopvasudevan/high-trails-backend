const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bikesSchema = new Schema({
  name: { type: String, required: true },
  make: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: Array, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Bike', bikesSchema);
