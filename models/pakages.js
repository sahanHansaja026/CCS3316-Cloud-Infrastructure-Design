const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: false, 
  },
  size: {
    type: String,
    required: false, 
  },
  color: {
    type: String,
    required: false, 
  },
  weight: {
    type: String,
    required: false, 
  },
});

module.exports = mongoose.model("Pakage Details", postSchema);
