const Student = require("../models/studentModels.js");

exports.createstudent = async (req, res) => {
  const data = req.body;
  const { email } = data;
  const existingstudent = await Student.findOne({ email });
  if (existingstudent) {
    res.status(400).json({ message: "student already exist" });
  }
  const student = new Student(data);
  await student.save();
  res.status(200).json(student);
};

exports.getallstudents = async (req, res) => {
  const student = await Student.find().populate("batch");
  res.status(200).json(student);
};

exports.getsinglestudent = async (req, res) => {
  const id = req.params.id;
  const student = await Student.findById(id);
  res.status(200).json(student);
};

exports.updatestudent = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const student = await Student.findByIdAndUpdate(id, data);
  res.status(200).json(student);
};

exports.deletestudent = async (req, res) => {
  const id = req.params.id;
  const student = await Student.findByIdAndDelete(id);
  res.status(200).json(student);
};
