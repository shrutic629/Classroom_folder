import React, { useState } from "react";
import "./AddClass.css";
import axios from "axios";

const AddClass = () => {
  const [data, setData] = useState({
    batchName: " ",
    timing: " ",
    subjects: " ",
    fees: " ",
    weekOff: " ",
    numberOfSeats: " ",
  });

  const classhandler = async (e) => {
    e.preventDefault();
    console.log(data);
    const token = localStorage.getItem("classapp_token");
    const response = await axios.post("http://localhost:3000/classes/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response, token);
  };

  return (
    <div>
      <form className="frm" onSubmit={classhandler}>
        <div className="inptab">
          <label>BatchName: </label>
          <input
            type="text"
            placeholder="Enter BatchName"
            value={data.batchName}
            onChange={(e) => setData({ ...data, batchName: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Timing: </label>
          <input
            type="time"
            placeholder="Enter Timing"
            value={data.timing}
            onChange={(e) => setData({ ...data, timing: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Subjects: </label>
          <input
            type="text"
            placeholder="Enter Subjects"
            value={data.subjects}
            onChange={(e) => setData({ ...data, subjects: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Fees: </label>
          <input
            type="Number"
            placeholder="Fees"
            value={data.fees}
            onChange={(e) => setData({ ...data, fees: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>WeekOff: </label>
          <input
            type="json"
            placeholder="WeekOff"
            value={data.weekOff}
            onChange={(e) => setData({ ...data, weekOff: e.target.value })}
          />
        </div>
        <div className="inptab">
          <label>Number of Seats: </label>
          <input
            type="Number"
            placeholder="Enter Number of Seats"
            value={data.numberOfSeats}
            onChange={(e) =>
              setData({ ...data, numberOfSeats: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClass;
