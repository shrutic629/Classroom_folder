import React, { useState, useEffect } from "react";
import "./Teacherlist.css";
import axios from "axios";

const Teacherlist = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const [modalview, setmodalView] = useState(false);
  const [delet, setDelet] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get("http://localhost:3000/teachers/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data, token);
    setData(response.data);
    if (response.status === 200) {
      alert("data fetch successfully");
    }
  };

  const teacherhandler = async (id) => {
    console.log(id);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get(`http://localhost:3000/teachers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data, token);
    setView(response.data);
    setmodalView(true);
  };

  const modelCLose = () => {
    setmodalView(false);
  };

  const deleteTeacher = async (id) => {
    console.log(id);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.delete(
      `http://localhost:3000/teachers/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data, token);
    setDelet(response.data);
  };

  return (
    <div>
      <h1>Teacherlist</h1>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>name: {item.name}</p>
            <p>email: {item.email}</p>
            <p>phone: {item.phone}</p>
            <p>address: {item.address}</p>
            <p>qualification: {item.qualification}</p>
            <p>salary: {item.salary}</p>
            <p>batchName: {item.batchName}</p>
            <p>experience: {item.experience}</p>
            <p>role: {item.role}</p>
            <p>timing: {item.timing}</p>
            <p>technology: {item.technology}</p>
            <p>joiningDate: {item.joiningDate}</p>
            <p>employeeId: {item.employeeId}</p>
            <button onClick={() => teacherhandler(item._id)}>
              View detail
            </button>
            <button
              onClick={() => deleteTeacher(item._id)}
              style={{ margin: "5px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {modalview && view && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>name: {view.name}</p>
            <p>email: {view.email}</p>
            <p>phone: {view.phone}</p>
            <p>address: {view.address}</p>
            <p>qualification: {view.qualification}</p>
            <p>salary: {view.salary}</p>
            <p>batchName: {view.batchName}</p>
            <p>experience: {view.experience}</p>
            <p>role: {view.role}</p>
            <p>timing: {view.timing}</p>
            <p>technology: {view.technology}</p>
            <p>joiningDate: {view.joiningDate}</p>
            <p>employeeId: {view.employeeId}</p>
            <button onClick={modelCLose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Model css
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "400px",
  },
};

export default Teacherlist;
