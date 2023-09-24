const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Created model for structure of table in database
const filesDownloadedSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('FileDownload', filesDownloadedSchema);
