import './App.css';
import { Routes, Route} from 'react-router-dom'

//App State
import AppState from './store/AppState';

//Components
// import ProtectedRoute from './components/ProtectedRoute';

//Pages
import Landing from './pages/landing/Landing';
import StudentSignup from './pages/student-signup/StudentSignup';
import TeacherSignup from './pages/teacher-signup/TeacherSignup';
import Login from './pages/login/Login';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import TeacherDashboard from './pages/teacherDashboard/Teacher';
import AdminDashboard from './pages/admin/AdminDashboard';
import NoMatch from './pages/noMatch/404';
import About from './pages/about/About';
import FAQ from './components/pricing/FAQ';
import Contact from './components/contact/Contact';
import Pricing from './pages/pricing/Pricing';
import RequestDemo from './pages/requestDemo/RequestDemo';

function App() {
  return (
      <div className="App"> 
        <AppState>
          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/faq' element={<FAQ/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/request' element={<RequestDemo/>} />
            {/* <Route path='/pricing' element={<Pricing/>} /> */}
            <Route path='/teacher_signup' element={<TeacherSignup/>} />
            <Route path='/student_signup'  element={<StudentSignup/>} />
            {/* <Route path='/studentDashboard' element={<ProtectedRoute><StudentDashboard/></ProtectedRoute>}/>
            <Route path='/teacher_dashboard' element={<ProtectedRoute><TeacherDashboard/></ProtectedRoute>}/>
            <Route path='/admin_dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/> */}
            <Route path='/student_dashboard' element={<StudentDashboard/>}/>
            <Route path='/teacher_dashboard' element={<TeacherDashboard/>}/>
            <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </AppState>
      </div>
  );
}

export default App;