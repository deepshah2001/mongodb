const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Created model for structure of table in database
const expenseSchema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model("expenses", expenseSchema);
