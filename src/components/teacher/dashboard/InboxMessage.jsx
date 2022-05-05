import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";

const Inboxmessage = () => {
  return (
    <div className={`${styles.teacher__inbox__message}`}>
      <div className={styles.teacher__inbox__message__textbox}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.teacher__inbox__message__usericon}`}
        ></img>{" "}
        <span className={styles.teacher__inbox__message__user}>
          Mark{" "}
          <small className={styles.teacher__inbox__message__user__time}>
            10:00AM
          </small>
          <small className={styles.teacher__inbox__message__userstatus}>
            online
          </small>
        </span>
      </div>
      <div className={styles.teacher__inbox__message__textbox}>
        <p className={styles.teacher__inbox__message__text}>
          Thank you Mark. I look forward...
        </p>
      </div>
    </div>
  );
};

export default Inboxmessage;
