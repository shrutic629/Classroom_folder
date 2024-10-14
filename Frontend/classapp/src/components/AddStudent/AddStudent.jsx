import React, { useState, useEffect } from "react";
import "./AddStudent.css";
import axios from "axios";

const AddStudent = () => {
  const [classes, setClasses] = useState([]);
  const [selectedbatch, setselectedbatch] = useState("");
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    fees: "",
    gender: "",
    rollNo: "",
    batch: "",
    joiningDate: "",
  });

  useEffect(() => {
    fetch();
  }, []);

  const studenthandler = async (e) => {
    e.preventDefault();
    student.batch = selectedbatch;
    console.log(student);
    console.log("selectedbatch", selectedbatch);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.post(
      "http://localhost:3000/students/",
      student,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response, token);
    if (response.status === 200) {
      alert("student added successfuly");
    } else if (response.status === 400) {
      alert("all fields are required");
    } else if (response.status === 500) {
      alert("Internal server error");
    }
  };

  const fetch = async () => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get("http://localhost:3000/classes/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setClasses(response.data);
  };

  const handleBatchSelect = (e) => {
    setselectedbatch(e.target.value);
  };

  return (
    <div>
      <form className="frm" onSubmit={studenthandler}>
        <div className="inptab">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Phone No: </label>
          <input
            type="Number"
            placeholder="Enter Phone No"
            value={student.phone}
            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Address: </label>
          <input
            type="text"
            placeholder="Enter Address"
            value={student.address}
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Qualification: </label>
          <input
            type="text"
            placeholder="Enter Qualification"
            value={student.qualification}
            onChange={(e) =>
              setStudent({ ...student, qualification: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Fees: </label>
          <input
            type="Number"
            placeholder="Fees"
            value={student.fees}
            onChange={(e) => setStudent({ ...student, fees: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Gender: </label>
          <input
            type="text"
            placeholder="Enter Gender"
            value={student.gender}
            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Roll No.: </label>
          <input
            type="Number"
            placeholder="Enter Roll No."
            value={student.rollNo}
            onChange={(e) => setStudent({ ...student, rollNo: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Batch: </label>
          <select onChange={handleBatchSelect} value={selectedbatch}>
            <option value="">select batch</option>
            {classes.map((item) => (
              <option key={item.id} value={item._id}>
                {item.batchName}
              </option>
            ))}
          </select>
          {/* {selectedbatch && <p>Batch Id: {selectedbatch}</p>} */}
        </div>
        <div className="inptab">
          <label>Joining Date: </label>
          <input
            type="date"
            placeholder="Enter Joining Date"
            value={student.joiningDate}
            onChange={(e) =>
              setStudent({ ...student, joiningDate: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
