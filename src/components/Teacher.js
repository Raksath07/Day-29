import React from 'react'
import {useNavigate} from 'react-router-dom'
import Base from '../core/Base'
import { AppState } from '../context/Appcontext'
import { url } from '../App'

function Teacher() {
  const navigate=useNavigate()
    const {teachers,setTeachers}=AppState()

    const deleteTeacher= async(idx) => {
      try {
        const res=await fetch(`${url}/teachers/${idx}`,
        {method:"Delete"}
        )
        const data=await res.json()
        console.log(data)
        const alteredTeachers = teachers.filter((teacher) => teacher.id !== idx);
      setTeachers(alteredTeachers);
      } catch (error) {
        console.log(error)
      }
      
    };

  return (
    <div>
        <Base title="Teacher Details">
        <div className="user-content">
          {/* {console.log(users)} */}
          {teachers.map((teacher, idx) => (
            <div className="teacher-card" key={idx}>
              <h1>{teacher.name}</h1>
              <p>Email:{teacher.email}</p>
              <div className="btn-group">
                <button className="btn edit-btn"
                onClick={()=>{navigate(`/editTeacher/${teacher.id}`)}}
                >Edit</button>
                <button className="btn view-btn"
                onClick={()=>{navigate(`/single/${idx}`)}}
                >View</button>
                <button
                  className="btn del-btn"
                  onClick={()=>{deleteTeacher(teacher.id)}}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        </Base>
    </div>
  )
}

export default Teacher