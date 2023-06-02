import React from 'react'
import {useLocation} from 'react-router-dom'
function UserPage() {
    const location=useLocation()
    const user=location.state
  return (
    <div className='userPage-content'>
    <div className='user-content'>
            <div className='user-card'>
                <h2>{user.name}</h2>
                <h4>Batch:{user.Batch}</h4>
                <h4>Email:{user.email}</h4>
                {user.Exp !== undefined && (<h4>Exp:{user.Exp}</h4>)}
            </div>
    </div>
    </div>
  )
}

export default UserPage