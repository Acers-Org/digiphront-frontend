import DashboardLayout from "../../layout/DashboardLayout";
import styles from "./Teacher.module.scss";
// import ReactPlayer from "react-player";
import "./Teacher.css";
import Studentperformancenotice from "../../components/teacher/dashboard/StudentPerformanceNotice";
import Submittedtests from "../../components/teacher/dashboard/SubmittedTests";
import SemesterProgress from "../../components/teacher/dashboard/SemesterProgress";
import Inbox from "../../components/teacher/dashboard/Inbox";
import TopStudents from "../../components/teacher/dashboard/TopStudents";
import Groups from "../../components/teacher/dashboard/Groups";

const TeacherDashboard = () => {
  return (
    <DashboardLayout>
      <div className={styles.teacher}>
        <div className="row my-3">
          <div className="col-md-8">
            <Studentperformancenotice />
            <Submittedtests />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <TopStudents />
                </div>
                <div className="col-md-6">
                  <Groups />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <SemesterProgress />
            <Inbox />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
