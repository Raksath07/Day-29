import React, { useState } from 'react'
import Base from '../core/Base'
import {useNavigate} from 'react-router-dom'
import { AppState } from '../context/Appcontext'
import { url } from '../App'
function AddUser() {

    const {users,setUsers}=AppState()
    const navigate=useNavigate()
    const[userDetails,setUserDetails]=useState({id:"",name:"",email:"",experience:"",batch:""})

    const addNewUser=async(event)=>{
        event.preventDefault()
        try {
            const response=await fetch(`${url}/users`,{
                method:"POST",
                body:JSON.stringify(userDetails),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data=await response.json()
            console.log(data)
            setUsers([...users,data])
        } catch (error) {
            console.log(error)
        }
        navigate('/')
        // console.log(userDetails)
    }
  return (
    <div>
        <Base title="Add-User">
        <div className='form-container'>
        <form className='form' onSubmit={addNewUser}>
            <input placeholder='id'
            onChange={(e)=>{
                setUserDetails({...userDetails,id:e.target.value})
            }}
            />
            <input placeholder='name'
            onChange={(e)=>{
                setUserDetails({...userDetails,name:e.target.value})
            }}
            />
            <input placeholder='email'
            onChange={(e)=>{
                setUserDetails({...userDetails,email:e.target.value})
            }}
            />
            <input placeholder='experience'
            onChange={(e)=>{
                setUserDetails({...userDetails,experience:e.target.value})
            }}
            />
            <input placeholder='batch'
            onChange={(e)=>{
                setUserDetails({...userDetails,batch:e.target.value})
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

export default AddUser