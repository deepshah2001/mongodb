const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Created model for structure of table in database
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isPremium: Boolean,
  totalExpense: Number,
});

module.exports = mongoose.model("User", userSchema);
