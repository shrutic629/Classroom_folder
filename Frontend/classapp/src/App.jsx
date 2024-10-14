import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AddStudent from "./components/AddStudent/AddStudent";
import AddClass from "./components/AddClass/AddClass";
import Dashboard from "./components/Dashboard/Dashboard";
import Classlist from "./components/Classlist/Classlist";
import Studentlist from "./components/Studentlist/Studentlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacherlist from "./components/Teacherlist/Teacherlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addclass" element={<AddClass />} />
          <Route path="/classlist" element={<Classlist />} />
          <Route path="studentlist" element={<Studentlist />} />
          <Route path="/teacherlist" element={<Teacherlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
