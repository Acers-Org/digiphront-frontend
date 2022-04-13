import './App.css';
import { Routes, Route} from 'react-router-dom'

//App State
import AppState from './store/AppState';

//Components
import ProtectedRoute from './components/ProtectedRoute';

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
      <AppState>
        <ProtectedRoute routePath='/studentDashboard' children={<StudentDashboard/>}/>   
        <ProtectedRoute routePath='/teacher_dashboard' children={<TeacherDashboard/>}/>   
        <Routes>
         <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/teacherSignup' element={< TeacherSignup/>} />
          <Route path='/studentSignup'  element={<StudentSignup/>} />
          {/* <Route path='/studentDashboard' element={<StudentDashboard/>} />
          <Route path='/teacher_dashboard' element={<TeacherDashboard/>} /> */}
        </Routes>
      </AppState>
      </div>
  );
}

export default App;