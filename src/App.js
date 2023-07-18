// import {useState,useEffect } from 'react';
import "./App.css";
// import { data } from "./Data/Data";
import User from "./components/User";
import AddUser from "./components/AddUser"
import {Route,Routes} from 'react-router-dom'
import NoPage from './components/NoPage';
import SingleUser from './components/SingleUser';
import EditUser from './components/EditUser';
import Teacher from "./components/Teacher";
import AddTeacher from "./components/AddTeacher";
import EditTeacher from "./components/EditTeacher";
import SingleTeacher from "./components/SingleTeacher";

export const url="https://64798533a455e257fa6345c6.mockapi.io"
// import { AppState } from "./context/Appcontext";

function App() {
  // const {users,setUsers}=AppState()
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<User/>}/>
      <Route path="/addUser" element={<AddUser/>}/>
      <Route path='/user/:id' element={<SingleUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      <Route path="/addTeacher" element={<AddTeacher/>}/>
      <Route path="/editTeacher/:id" element={<EditTeacher/>}/>
      <Route path="/single/:id" element={<SingleTeacher/>}/>
      {/* <Route path='/student'/> */}
      <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
