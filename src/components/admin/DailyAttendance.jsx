import React from "react";
import styles from "../../pages/admin/Admin.module.scss";

const DailyAttendance = () => {
  return (
    <div className={styles.dailyAttendance}>
      <nav className={styles.dailyAttendance__nav}>
        <h4>Daily Attendance</h4>
        <ul>
          <li>
            <span className={styles.dailyAttendance__nav__studentlegend}></span>
            Student
          </li>
          <li>
            <span className={styles.dailyAttendance__nav__teacherlegend}></span>
            Teachers
          </li>
        </ul>
      </nav>
      <div className={`${styles.dailyAttendance__img}`}>
        <img
          src="https://res.cloudinary.com/dxsty3st6/image/upload/v1651629521/digiphront/dailyattendance_ia02iu.png"
          alt="attendance graph"
        />
      </div>
    </div>
  );
};

export default DailyAttendance;
