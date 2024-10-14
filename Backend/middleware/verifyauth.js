const User = require("../models/userschema");
const jwt = require("jsonwebtoken");
const secret = "eyttiuyiuigdvbcvnbbyuyiuoiiohvbvwerdfgfhgjhkjiouyttrteredgvbmn";

module.exports = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    console.log(">>>>header>>>>", header);
    
    if (!header) {
      res.status(401).json({ message: "no header provided" });
    }

    const token = header.split(" ")[1];
    console.log(">>>>token>>>>", token);
    if (!token) {
      res.status(401).json({ message: "no token provided" });
    }

    const decode = jwt.verify(token, secret);
    console.log(">>>>>>>decode>>>>>>>", decode);
    if (!decode) {
      res.status(401).json({ message: "Invalid user" });
    }

    const { id } = decode;
    const user = await User.findOne({ _id: id });
    console.log(">>>>>>>user>>>>>>>", user);
    if (!user) {
      res.status(401).json({ message: "no user found" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: `token time out ${error}` });
  }
};
