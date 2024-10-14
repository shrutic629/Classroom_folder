const Class = require("../models/classModels.js");

exports.createclass = async (req, res) => {
  const data = req.body;
  console.log(">>>>>>>data>>>>>>", data);
  const { batchName } = data;
  const existingclass = await Class.findOne({ batchName });
  if (existingclass) {
    res.status(400).json({ message: "class already exist" });
  }
  console.log("new console data", data);
  const classs = new Class(data);

  await classs.save();
  res.status(200).json(classs);
};

exports.getallclasses = async (req, res) => {
  const classs = await Class.find();
  res.status(200).json(classs);
};

exports.getsingleclass = async (req, res) => {
  const id = req.params.id;
  const classs = await Class.findById(id);
  res.status(200).json(classs);
};

exports.updateclass = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const classs = await Class.findByIdAndUpdate(id, data);
  res.status(200).json(classs);
};

exports.deleteclass = async (req, res) => {
  const id = req.params.id;
  const classs = await Class.findByIdAndDelete(id);
  res.status(200).json(classs);
};
