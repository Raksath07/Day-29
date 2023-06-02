import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import TeacherDetails from './components/TeacherDetails';
import UserPage from './components/UserPage';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createUser' element={<CreateUser/>}/>
        <Route path='/editUser' element={<EditUser/>}/>
        <Route path='/userPage' element={<UserPage/>}/>
        <Route path='/teacherDetails' element={<TeacherDetails/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
