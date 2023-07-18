// import React, { useState } from "react";
import { url } from "../App";
import { AppState } from "../context/Appcontext";
import Base from "../core/Base";
import {useNavigate} from "react-router-dom"
function User() {
  const {users,setUsers}=AppState()

  const navigate=useNavigate()
  const deleteFun = async(idx) => {
    try {
      const res=await fetch(`${url}/users/${idx}`,
      {method:"Delete"}
      )
      const data=await res.json()
      console.log(data)
      const alteredUsers = users.filter((user) => user.id !== idx);
    setUsers(alteredUsers);
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <div>
      <Base title="User Details">
        <div className="user-content">
          {/* {console.log(users)} */}
          {users.map((user, idx) => (
            <div className="user-card" key={idx}>
              <h1>{user.name}</h1>
              <p>Batch:{user.batch}</p>
              <p>Email:{user.email}</p>
              <p>Exp:{user.experience}</p>
              <div className="btn-group">
                <button className="btn edit-btn"
                onClick={()=>{navigate(`/edit/${user.id}`)}}
                >Edit</button>
                <button className="btn view-btn"
                onClick={()=>{navigate(`/user/${idx}`)}}
                >View</button>
                <button
                  className="btn del-btn"
                  onClick={() => deleteFun(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Base>
    </div>
  );
}

export default User;
