const User = require("../models/userschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "eyttiuyiuigdvbcvnbbyuyiuoiiohvbvwerdfgfhgjhkjiouyttrteredgvbmn";

exports.signup = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  console.log(">>>>>>>>req.body>>>>>>>>", req.body);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(401).json({ message: "user already exist" });
  }

  if (!(name && email && password && phone && role)) {
    return res.status(401).json({ message: "all fields are required" });
  }

  const data = { name, email, password: hash, phone, role };
  const user = new User(data);
  await user.save();
  res.status(200).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(">>>>>>>>req.body>>>>>>>>", req.body);

  if (!(email && password)) {
    return res.status(401).json({ message: "all fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: existingUser._id }, secret, {
    expiresIn: "1m",
  });
  console.log(">>>>token>>>", token);

  res.json({ token, existingUser });
};
