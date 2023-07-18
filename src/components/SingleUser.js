import React from 'react'
import Base from '../core/Base'
import {useParams} from "react-router-dom"
import { AppState } from '../context/Appcontext'
function SingleUser() {
  const {users}=AppState()
    const {id}=useParams()
    const person=users[id]
  return (
    <Base
    title={person.name}
    >
        <div className="user-card">
              <h1>{person.name}</h1>
              <p>Batch:{person.batch}</p>
              <p>Email:{person.email}</p>
              <p>Exp:{person.experience}</p>
            </div>
    </Base>
  )
}

export default SingleUser