const { json } = require("express");
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    batchName: {
      type: String,
      require: true,
      unique: true,
    },
    timing: {
      type: String,
      require: true,
    },
    subjects: {
      type: String,
      require: true,
    },
    fees: {
      type: Number,
      require: true,
    },
    weekOff: {
      type: JSON,
      require: true,
    },
    numberOfSeats: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Class", classSchema);
