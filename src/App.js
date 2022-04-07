import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentSignup from './pages/student-signup/StudentSignup';
import TeacherSignup from './pages/teacher-signup/TeacherSignup';
import Login from './pages/login/Login';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';

function App() {
  return (
      <div className="App"> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/teacherSignup' element={< TeacherSignup />} />
          <Route path='/studentSignup'  element={<StudentSignup />} />
          <Route path='/studentDashboard' element={<StudentDashboard />} />
        </Routes>
      </div>
  );
}

export default App;
