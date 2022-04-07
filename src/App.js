import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentSignup from './component/student-signup/StudentSignup';
import TeacherSignup from './component/teacher-signup/TeacherSignup';
import Sidebar from './component/sidebar/Sidebar';
import Login from './component/login/Login';
import StudentDashboard from './component/studentDashboard/StudentDashboard';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/teacherSignup' element={< TeacherSignup />} />
          <Route path='/studentSignup'  element={<StudentSignup />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/studentDashboard' element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
