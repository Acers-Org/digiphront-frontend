import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";

const SemesterProgress = () => {
  return (
    <div className={styles.semesterProgress}>
      <h4>Semester Progress</h4>
      <div
        className={`${styles.semesterProgress__card} ${styles.semesterProgress__green}`}
      >
        <span>
          <strong>Lesson Progress</strong>
        </span>
        <span className="text-white">30/35</span>
      </div>
      <div
        className={`${styles.semesterProgress__card} ${styles.semesterProgress__white}`}
      >
        <span>Semester Exams in</span>
        <span>
          <strong>9 days</strong>
        </span>
      </div>
    </div>
  );
};

export default SemesterProgress;
