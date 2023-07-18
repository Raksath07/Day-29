import React from "react";
// import { createContext } from "react";
import { useNavigate } from "react-router-dom";
// import {data} from '../Data/Data'

// const appContext=createContext(null)
function Base({ title, children }) {
  // const [users,setUsers]=useState(data)
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav-styles">
        <span>
          <button
            className="nav-buttons"
            onClick={() => {
              navigate("/");
            }}
          >
            Dashboard
          </button>

          <button
            className="nav-buttons"
            onClick={() => {
              navigate("/addUser");
            }}
          >
            AddUser
          </button>

          <button
            className="nav-buttons"
            onClick={() => {
              navigate("/teacher");
            }}
          >
            Teachers
          </button>
          <button
            className="nav-buttons"
            onClick={() => {
              navigate("/addTeacher");
            }}
          >
            AddTeacher
          </button>
        </span>
        <span></span>
      </div>
      <div className="title">{title}</div>
      <div className="childred">{children}</div>
      <footer>
        Contact us
        <div>Email : abc123@gmail.com</div>
        <div>Phone : +9167845321</div>
      </footer>
    </div>
  );
}

export default Base;
