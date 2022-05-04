import styles from "./Admin.module.scss";
import Hero from "../../components/admin/Hero";
import DailyAttendance from "../../components/admin/DailyAttendance";
import ProgressCircle from "../../components/admin/ProgressCircle";
import AdminCalender from "../../components/admin/AdminCalender";
const AdminDashboard = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <div className="row my-3 py-3">
        <div className="col-md-4">
          <DailyAttendance />
        </div>
        <div className="col-md-5">
          <div className={styles.main__progressgrid}>
            <ProgressCircle
              title="Fees Collections"
              percentage={90}
              type="primary"
            />
            <ProgressCircle title="Attendance" percentage={60} type="primary" />
            <ProgressCircle title="Attendance" percentage={80} type="orange" />
            <ProgressCircle title="Syllabus" percentage={30} type="darkred" />
          </div>
        </div>
        <div className="col-md-3 py-3">
          <AdminCalender />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
