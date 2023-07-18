import React from 'react'
import {useNavigate} from 'react-router-dom'
function NoPage() {
const navigate=useNavigate()
  return (
    <div>
        <h1>Wrong Page</h1>
        <button onClick={()=>{
            navigate('/')
        }}>
            Dashboard
        </button>
    </div>
  )
}

export default NoPage