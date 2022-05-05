import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";

const TopStudents = () => {
  return (
    <div className={styles.topstudent}>
      <nav>
        <h4>Top Students</h4>
        <ul className={styles.topstudent__navbar}>
          <li className={styles.topstudent__navbar__link}>
            Class 5 <i className="fa fa-chevron-down"></i>
          </li>
        </ul>
      </nav>
      <div className={styles.topstudent__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.topstudent__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.topstudent__listbox__student}>
          Mark
          <span className={styles.topstudent__listbox__student__scorewrapper}>
            Total score <small>93%</small>
          </span>
        </span>
      </div>
      <div className={styles.topstudent__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.topstudent__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.topstudent__listbox__student}>
          Julie
          <span className={styles.topstudent__listbox__student__scorewrapper}>
            Total score <small>90%</small>
          </span>
        </span>
      </div>
      <div className={styles.topstudent__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.topstudent__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.topstudent__listbox__student}>
          Maria
          <span className={styles.topstudent__listbox__student__scorewrapper}>
            Total score <small>89%</small>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TopStudents;
