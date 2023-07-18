import React, { useState } from 'react'
import { AppState } from '../context/Appcontext'
import { url } from '../App'
import { useNavigate } from 'react-router-dom'
import Base from '../core/Base'

function AddTeacher() {
    const navigate=useNavigate()
    const {teachers,setTeachers}=AppState()

    const [teacherDetails,setTeacherDetails]=useState({
        id:"",
        name:"",
        email:""
    })

    const addNewTeacher=async(e)=>{
        e.preventDefault()
        try {
            const response=await fetch(`${url}/teachers`,{
                method:"POST",
                body:JSON.stringify(teacherDetails),
                Headers:{
                    "Content-Type":"application/json"
                }
            })
            const data=await response.json()
            console.log(data)
            setTeachers([...teachers,data])
            navigate('/teacher')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
        <Base title="Add-Teacher">
        <div className='form-container'>
        <form className='form' onSubmit={addNewTeacher}>
            <input placeholder='id'
            onChange={(e)=>{
                setTeacherDetails({...teacherDetails,id:e.target.value})
                // setUserDetails({...userDetails,id:e.target.value})
            }}
            />
            <input placeholder='name'
            onChange={(e)=>{
                setTeacherDetails({...teacherDetails,name:e.target.value})
                // setUserDetails({...userDetails,name:e.target.value})
            }}
            />
            <input placeholder='email'
            onChange={(e)=>{
                setTeacherDetails({...teacherDetails,email:e.target.value})
                // setUserDetails({...userDetails,email:e.target.value})
            }}
            />
            <button type='submit'>
            Add
        </button>
        </form>
        
        </div>
        </Base>
    </div>
  )
}

export default AddTeacher