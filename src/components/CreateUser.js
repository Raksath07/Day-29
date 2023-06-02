import React,{useState} from 'react'

function CreateUser() {
const [newUser,setNewUser]=useState({name:"",batch:"B43WD",email:"",Exp:""})
  return (
    <div className='userEdit-content'>
    <h1>Create-User</h1>
    <div >
        <div className='user-edit'>
            <input type='text' placeholder='Name'
            onChange={(e)=>{
                setNewUser({...newUser,name:e.target.value})
            }}
            />
            <input type='email' placeholder='Email'
            onChange={(e)=>{
                setNewUser({...newUser,email:e.target.value})
            }}
            />
            <input type='number' placeholder='Experience'
            onChange={(e)=>{
                setNewUser({...newUser,Exp:e.target.value})
            }}
            />
            <button onClick={console.log(newUser)}>Done</button>
        </div>
    </div>
    </div>
  )
}

export default CreateUser