const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Created model for structure of table in database
const orderSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  paymentid: String,
  orderid: String,
  status: String,
});

module.exports = mongoose.model('Order', orderSchema);
