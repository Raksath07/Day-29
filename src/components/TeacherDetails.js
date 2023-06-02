import React,{useState} from 'react'
import { teacherData } from '../data/teachers'
import { useNavigate} from 'react-router-dom'
function TeacherDetails() {
    const navigate=useNavigate()
    
    const [teachers,setTeacher]=useState(teacherData)
  return (
    <div>
          <h1>Teacher Details</h1>
    <div className='user-content'>
        {teachers.map((teacher,id)=>(
            <div key={id} className='user-card'>
                <h2>{teacher.name}</h2>
                <h4>Batch:{teacher.Batch}</h4>
                <h4>Email:{teacher.email}</h4>
                <div className='user-button'>
                <button
                onClick={()=>{
                    navigate('/editUser',{state:teacher})
                }}
                >Edit</button>
                <button onClick={()=>{
                    navigate('/userPage',{state:teacher})
                }}>View</button>
                <button>Delete</button>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TeacherDetails