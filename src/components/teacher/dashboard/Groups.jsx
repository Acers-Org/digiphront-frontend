import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";

const Groups = () => {
  return (
    <div className={styles.groups}>
      <nav>
        <h4>Groups</h4>
        <ul className={styles.groups__navbar}>
          <li className={styles.groups__navbar__link}>
            Class 5 <i className="fa fa-chevron-down"></i>
          </li>
        </ul>
      </nav>
      <div className={styles.groups__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.groups__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.groups__listbox__student}>
          Class 5
          <span className={styles.groups__listbox__student__activity}>You</span>
        </span>
      </div>
      <div className={styles.groups__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.groups__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.groups__listbox__student}>
          Teachers Group
          <span className={styles.groups__listbox__student__activity}>
            Meeting coming up today
          </span>
        </span>
      </div>
      <div className={styles.groups__listbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.groups__listbox__usericon}`}
        ></img>{" "}
        <span className={styles.groups__listbox__student}>
          IT Unit
          <span className={styles.groups__listbox__student__activity}>
            We are available anytime
          </span>
        </span>
      </div>
    </div>
  );
};

export default Groups;
