import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const userName = localStorage.getItem("logged_in_user_name");

  return (
    <div>
      <div className="head">
        <ul>
          <li>
            <Link>
              Class
              <div className="dropdown">
                <li>
                  <Link to={"/addclass"}>AddClass</Link>
                </li>
                <li>
                  <Link to={"/classlist"}>ClassList</Link>
                </li>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              Teacher
              <div className="dropdown">
                <li>
                  <Link to={"/addteacher"}>AddTeacher</Link>
                </li>
                <li>
                  <Link to={"/teacherlist"}>TeacherList</Link>
                </li>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              Student
              <div className="dropdown">
                <li>
                  <Link to={"/addstudent"}>AddStudent</Link>
                </li>
                <li>
                  <Link to={"/studentlist"}>StudentList</Link>
                </li>
              </div>
            </Link>
          </li>
          <li>Dashboard</li>
          <li>
            <span style={{ color: "red" }}>Hi {userName}!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
