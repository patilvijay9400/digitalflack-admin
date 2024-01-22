// src/models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
