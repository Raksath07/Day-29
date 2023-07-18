import React, { createContext, useContext, useEffect, useState } from 'react'
// import { data } from '../Data/Data'
import { url } from '../App'

const AppContext=createContext('')


function Appcontext({children}) {
  const [users,setUsers]=useState([])
  const [teachers,setTeachers]=useState([])
  useEffect(()=>{
    const getUserDetails=async()=>{
      try {
      const response=await fetch(`${url}/users`)
      const data=await response.json()
      if(!data){
        console.log("Unable to fetch data");
      }
      console.log(data)
      setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    const getTeacherDetails=async()=>{
      try {
        const response=await fetch(`${url}/teachers`,{
          method:"GET"
        })
        const data=await response.json()
        if(!data){
          console.log("Unable to fetch data")
        }
        console.log(data)
        setTeachers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserDetails()
    getTeacherDetails()
  },[])
    
  return (
    <AppContext.Provider
    value={{
        users,
        setUsers,
        teachers,
        setTeachers
    }}
    >
        {children}
    </AppContext.Provider>
  )
}
export const AppState=()=>{
    return useContext(AppContext)
}
export default Appcontext