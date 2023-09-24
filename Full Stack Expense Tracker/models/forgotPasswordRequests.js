const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Created model for structure of table in database
const resetPasswordSchema = new Schema({
  isActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('ResetPassword', resetPasswordSchema);
