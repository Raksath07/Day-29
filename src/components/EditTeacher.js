import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { AppState } from '../context/Appcontext'
import { useEffect } from 'react'
import { url } from '../App';
import Base from '../core/Base';

function EditTeacher() {
  const { id } = useParams();
  const {teachers}=AppState()
  const [teacher,setTeacher]=useState({})
  const navigate=useNavigate()

  useEffect(() => {
    const filteredTeacher = teachers.find((teacher) => teacher.id === id);
    setTeacher(filteredTeacher);
    // console.log(filteredUser)
    // console.log(user)
  }, []);

  const edit=async(id)=>{
    try {
      const response = await fetch(`${url}/teachers/${id}`, {
        method: "PUT",
        body: JSON.stringify(teacher),
        Headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data)
      const index = teachers.findIndex((per) => per.id === id);
      teachers[index] = teacher;
      navigate('/teacher')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Base title="Edit-User">
        <div className="form-container">
          <form className="form">
            <input
              placeholder="name"
              value={teacher.name}
              onChange={(e) => {
                setTeacher({...teacher,name:e.target.value})
                // setUser({ ...user, name: e.target.value });
              }}
            />
            <input
              placeholder="email"
              value={teacher.email}
              onChange={(e) => {
                setTeacher({...teacher,email:e.target.value})
                // setUser({ ...user, email: e.target.value });
              }}
            />
          </form>
          <button className="editButton" onClick={() => edit(teacher.id)}>
            Edit
          </button>
        </div>
      </Base>
    </div>
  )
}

export default EditTeacher