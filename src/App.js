import './App.css';
import { Routes, Route} from 'react-router-dom'

//Pages
import Landing from './pages/landing/Landing';
import StudentSignup from './pages/student-signup/StudentSignup';
import TeacherSignup from './pages/teacher-signup/TeacherSignup';
import Login from './pages/login/Login';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import TeacherDashboard from './pages/teacherDashboard/Teacher';

function App() {
  return (
      <div className="App"> 
        <Routes>
         <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/teacherSignup' element={< TeacherSignup/>} />
          <Route path='/studentSignup'  element={<StudentSignup/>} />
          <Route path='/studentDashboard' element={<StudentDashboard/>} />
          <Route path='/teacher_dashboard' element={<TeacherDashboard/>} />
        </Routes>
      </div>
  );
}

export default App;