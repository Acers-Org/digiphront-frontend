import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";
import Inboxmessage from "./InboxMessage";

const Inbox = () => {
  return (
    <div className={styles.teacher__inbox}>
      <div className={styles.teacher__inbox__header}>
        <h4 className={styles.teacher__inbox__header__title}>Inbox</h4>
        <i
          className={`fa fa-ellipsis-v ${styles.teacher__inbox__header__icon}`}
        ></i>
      </div>
      <Inboxmessage />
      <Inboxmessage />
    </div>
  );
};

export default Inbox;
