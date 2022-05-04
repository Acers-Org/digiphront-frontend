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
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import RequestDemo from "./pages/requestDemo/RequestDemo";
import TeacherClasses from "./pages/teacherDashboard/Classes";
import ContactPage from "./pages/contact/Contact";
import FaqPage from "./pages/Faq";

function App() {
  return (
    <div className="App">
      <AppState>
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/request" element={<RequestDemo />} />
            <Route path="/teacher_signup" element={<TeacherSignup />} />
            <Route path="/student_signup" element={<StudentSignup />} />
            <Route
              path="/student_dashboard"
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
            <Route
              path="/teacher_classes"
              element={
                <ProtectedRoute>
                  <TeacherClasses />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppState>
    </div>
  );
}

export default App;
