import DashboardLayout from "../../layout/DashboardLayout";
import styles from "./Teacher.module.scss";
// import ReactPlayer from "react-player";
import "./Teacher.css";
import Studentperformancenotice from "../../components/teacher/dashboard/StudentPerformanceNotice";
import Submittedtests from "../../components/teacher/dashboard/SubmittedTests";
import SemesterProgress from "../../components/teacher/dashboard/SemesterProgress";

const TeacherDashboard = () => {
  return (
    <DashboardLayout>
      <div className={styles.teacher}>
        <div className="row my-3">
          <div className="col-md-8">
            <Studentperformancenotice />
            <Submittedtests />
          </div>
          <div className="col-md-4">
            <SemesterProgress />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
