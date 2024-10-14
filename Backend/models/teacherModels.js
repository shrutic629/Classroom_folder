const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    qualification: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
      require: true,
    },
    batchName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    experience: {
      type: Number,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    timing: {
      type: String,
      require: true,
    },
    technology: {
      type: String,
      require: true,
    },
    joiningDate: {
      type: Date,
      require: true,
    },
    employeeId: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Teacher", teacherSchema);
