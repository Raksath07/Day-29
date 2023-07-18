import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { useParams, useNavigate } from "react-router-dom";
import { AppState } from "../context/Appcontext";
import { url } from "../App";
function EditUser() {
  const { users } = AppState();
  // console.log(id)
  const { id } = useParams();
  // console.log(filteredUser)
  const navigate = useNavigate();

  const edit = async (id) => {
    try {
      const response = await fetch(`${url}/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        Headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const index = users.findIndex((per) => per.id === id);
      users[index] = user;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // console.log(users)
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    const filteredUser = users.find((user) => user.id === id);
    setUser(filteredUser);
    // console.log(filteredUser)
    // console.log(user)
  }, []);

  return (
    <div>
      <Base title="Edit-User">
        <div className="form-container">
          <form className="form">
            <input
              placeholder="name"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
            <input
              placeholder="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <input
              placeholder="experience"
              value={user.experience}
              onChange={(e) => {
                setUser({ ...user, experience: e.target.value });
              }}
            />
            <input
              placeholder="batch"
              value={user.batch}
              onChange={(e) => {
                setUser({ ...user, batch: e.target.value });
              }}
            />
          </form>
          <button className="editButton" onClick={() => edit(user.id)}>
            Edit
          </button>
        </div>
      </Base>
    </div>
  );
}

export default EditUser;
