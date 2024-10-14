import React, { useState, useEffect } from "react";
import "./Studentlist.css";
import axios from "axios";

const Studentlist = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const [modelview, setModelview] = useState(false);
  const [delet, setDelet] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get("http://localhost:3000/students/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setData(response.data);
    if (response.status === 200) {
      alert("data fetch successfully");
    }
  };

  const viewdetails = async (id) => {
    console.log(id);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get(`http://localhost:3000/students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data, token);
    setView(response.data);
    setModelview(true);
  };

  const modelClose = () => {
    setModelview(false);
  };

  const deletStudent = async (id) => {
    console.log(id);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.delete(
      `http://localhost:3000/students/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data, token);
    setDelet(response.data);
  };

  return (
    <div>
      <h1>Studentlist</h1>
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
            <p>fees: {item.fees}</p>
            <p>gender: {item.gender}</p>
            <p>rollNo: {item.rollNo}</p>
            <p>
              {/* batch:{" "} */}
              {/* <h4>Batch Details</h4> */}
              <p>batchName: {item.batch.batchName}</p>
            </p>
            <p>joiningDate: {item.joiningDate}</p>
            <button onClick={() => viewdetails(item._id)}>view details</button>
            <button
              onClick={() => deletStudent(item._id)}
              style={{ margin: "5px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* model start */}
      {modelview && view && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>name: {view.name}</p>
            <p>email: {view.email}</p>
            <p>phone: {view.phone}</p>
            <p>address: {view.address}</p>
            <p>qualification: {view.qualification}</p>
            <p>fees: {view.fees}</p>
            <p>gender: {view.gender}</p>
            <p>rollNo: {view.rollNo}</p>
            <p>batch: {view.batch}</p>
            <p>joiningDate: {view.joiningDate}</p>
            <button onClick={modelClose}>Close</button>
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

export default Studentlist;
