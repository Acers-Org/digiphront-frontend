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
import AdminDashboard from './pages/admin/AdminDashboard';
import NoMatch from './pages/noMatch/404';

function App() {
  return (
      <div className="App"> 
        <AppState>
          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/teacherSignup' element={<TeacherSignup/>} />
            <Route path='/studentSignup'  element={<StudentSignup/>} />
            <Route path='*' element={<NoMatch />}/>
          </Routes>
          <ProtectedRoute routePath='/studentDashboard' Component={StudentDashboard}/>   
          <ProtectedRoute routePath='/teacher_dashboard' Component={TeacherDashboard}/>   
          <ProtectedRoute routePath='/admin_dashboard' Component={AdminDashboard}/>   
        </AppState>
      </div>
  );
}

export default App;