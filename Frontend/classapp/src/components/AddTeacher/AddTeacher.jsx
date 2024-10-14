import React, { useState, useEffect } from "react";
import "./AddTeacher.css";
import axios from "axios";

const AddTeacher = () => {
  const [classes, setClasses] = useState([]);
  const [selectedbatch, setSelectedbatch] = useState("");
  const [teacherdata, setteacherData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    salary: "",
    batchName: "",
    experience: "",
    role: "",
    timing: "",
    technology: "",
    joiningDate: "",
    employeeId: "",
  });

  useEffect(() => {
    fetch();
  }, []);

  async function classhandler(e) {
    e.preventDefault();
    console.log(">>>>>>>>>teacherdata>>>>>>>>", teacherdata);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.post(
      "http://localhost:3000/teachers/",
      teacherdata,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response, token);
    if (response.status === 200) {
      alert("teacher added successfully");
    } else if (response.status === 400) {
      alert("all fields are required");
    } else if (response.status === 500) {
      alert("Internal server error");
    }
  }

  const fetch = async () => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get("http://localhost:3000/classes/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setClasses(response.data);
  };

  const handleBatchselect = (e) => {
    setSelectedbatch(e.target.value);
  };

  return (
    <div>
      <form className="frm" onSubmit={classhandler}>
        <div className="inptab">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={teacherdata.name}
            onChange={(e) =>
              setteacherData({ ...teacherdata, name: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={teacherdata.email}
            onChange={(e) =>
              setteacherData({ ...teacherdata, email: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Phone No: </label>
          <input
            type="Number"
            placeholder="Enter Phone No"
            value={teacherdata.phone}
            onChange={(e) =>
              setteacherData({ ...teacherdata, phone: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Address: </label>
          <input
            type="text"
            placeholder="Enter Address"
            value={teacherdata.address}
            onChange={(e) =>
              setteacherData({ ...teacherdata, address: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Qualification: </label>
          <input
            type="text"
            placeholder="Enter Qualification"
            value={teacherdata.qualification}
            onChange={(e) =>
              setteacherData({ ...teacherdata, qualification: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Salary: </label>
          <input
            type="text"
            placeholder="Enter Salary"
            value={teacherdata.salary}
            onChange={(e) =>
              setteacherData({ ...teacherdata, salary: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>BatchName: </label>
          <select onChange={handleBatchselect} value={selectedbatch}>
            <option value="">select batch</option>
            {classes.map((item) => (
              <option key={item.id} value={item._id}>
                {item.batchName}
              </option>
            ))}
          </select>
          {/* {selectedbatch && <p>Batch ID: {selectedbatch}</p>} */}
        </div>
        <div className="inptab">
          <label>Experience: </label>
          <input
            type="text"
            placeholder="Enter Experience"
            value={teacherdata.experience}
            onChange={(e) =>
              setteacherData({ ...teacherdata, experience: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Role: </label>
          <input
            type="text"
            placeholder="Enter Role"
            value={teacherdata.role}
            onChange={(e) =>
              setteacherData({ ...teacherdata, role: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Timing: </label>
          <input
            type="text"
            placeholder="Enter Timing"
            value={teacherdata.timing}
            onChange={(e) =>
              setteacherData({ ...teacherdata, timing: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Technology: </label>
          <input
            type="text"
            placeholder="Enter Technology"
            value={teacherdata.technology}
            onChange={(e) =>
              setteacherData({ ...teacherdata, technology: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Joining Date: </label>
          <input
            type="date"
            placeholder="Enter Joining Date"
            value={teacherdata.joiningDate}
            onChange={(e) =>
              setteacherData({ ...teacherdata, joiningDate: e.target.value })
            }
          />
        </div>
        <div className="inptab">
          <label>Employee Id: </label>
          <input
            type="text"
            placeholder="Enter Employee Id"
            value={teacherdata.employeeId}
            onChange={(e) =>
              setteacherData({ ...teacherdata, employeeId: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTeacher;
