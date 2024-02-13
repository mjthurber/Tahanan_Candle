const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  fragranceNotes: {
    type: String
  },
  signatureNotes: {
    type: String
  },
  inspiration: {
    type: String
  },
  intendedExperience: {
    type: String
  },
  pleaseNote: {
    type: String
  },
  image: {
    type: String
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  size: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
