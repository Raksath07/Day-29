import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
function EditUser() {
  const navigate=useNavigate()
    const location=useLocation()
    const userData=location.state
  return (
    <div className='userEdit-content'>
    <div>EditUser</div>
    <div >
        <div className='user-edit'>
            <input type='text' placeholder='Name' value={userData.name}/>
            <input type='email' placeholder='Email' value={userData.email}/>
            {userData.Exp!==undefined && 
            (<input type='number' placeholder='Experience' value={userData.Exp}/>)}
            <button onClick={()=>{navigate('/')}}>Done</button>
        </div>
    </div>
    </div>
  )
}

export default EditUser