import React, { useState, useEffect } from "react";
import "./Classlist.css";
import axios from "axios";

const Classlist = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const [modelview, setModelView] = useState(false);
  const [delet, setDelet] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get("http://localhost:3000/classes/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setData(response.data);
    if (response.status === 200) {
      alert("getall users successfully");
    }
  };

  const viewdetail = async (id) => {
    const token = localStorage.getItem("classapp_token");
    const response = await axios.get(`http://localhost:3000/classes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setView(response.data);
    setModelView(true);
  };

  const modelClose = () => {
    setModelView(false);
  };

  const deletedetail = async (id) => {
    console.log(id);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.delete(`http://localhost:3000/classes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
    setDelet(response.data);
  };

  return (
    <div>
      <h1>Classlist</h1>
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
            <p>BatchName: {item.batchName}</p>
            <p>Timing: {item.timing}</p>
            <p>Subjects: {item.subjects}</p>
            <p>Fees: {item.fees}</p>
            <p>WeekOff: {item.weekOff}</p>
            <p>NumberOfSeats: {item.numberOfSeats}</p>
            <button onClick={() => viewdetail(item._id)}>View</button>
            <button
              onClick={() => deletedetail(item._id)}
              style={{ margin: "5px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {modelview && view && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>BatchName: {view.batchName}</p>
            <p>Timing: {view.timing}</p>
            <p>Subjects: {view.subjects}</p>
            <p>Fees: {view.fees}</p>
            <p>WeekOff: {view.weekOff}</p>
            <button onClick={modelClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

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

export default Classlist;
