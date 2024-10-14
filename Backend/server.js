const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3000;

const mongoURL =
  "mongodb+srv://Shruti:1234@cluster0.rbneugk.mongodb.net/classroom";
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((error) => {
    console.log(`not connected to mongodb`);
  });

app.use(express.json());
app.use(cors());

const studentR = require("./routes/studentroutes");
app.use("/students", studentR);

const teacherR = require("./routes/teacherroutes");
app.use("/teachers", teacherR);

const classR = require("./routes/classroutes");
app.use("/classes", classR);

const userR = require("./routes/userroutes");
app.use("/users", userR);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
