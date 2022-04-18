import "./App.css";
import { Routes, Route } from "react-router-dom";

//App State
import AppState from "./store/AppState";

//Components
import ProtectedRoute from "./components/ProtectedRoute";

//Pages
import Landing from "./pages/landing/Landing";
import StudentSignup from "./pages/student-signup/StudentSignup";
import TeacherSignup from "./pages/teacher-signup/TeacherSignup";
import Login from "./pages/login/Login";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/teacherDashboard/Teacher";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NoMatch from "./pages/noMatch/404";

function App() {
  return (
    <div className="App">
      <AppState>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/teacherSignup" element={<TeacherSignup />} />
          <Route path="/studentSignup" element={<StudentSignup />} />
          <Route
            path="/studentDashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher_dashboard"
            element={
              <ProtectedRoute>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin_dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path='/studentDashboard' element={<StudentDashboard/>}/>
            <Route path='/teacher_dashboard' element={<TeacherDashboard/>}/>
            <Route path='/admin_dashboard' element={<AdminDashboard/>}/> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppState>
    </div>
  );
}

export default App;
