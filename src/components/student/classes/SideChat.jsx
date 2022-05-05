import React from "react";
import styles from "../../../pages/studentDashboard/Student.module.scss";

const Sidechat = () => {
  return (
    <div className={styles.sidechat}>
      <div className={styles.sidechat__search}>
        <input
          className={styles.sidechat__search__input}
          type="text"
          placeholder="search here"
          name="search"
        />
        <i className={`fa fa-search ${styles.sidechat__search__icon}`}></i>
      </div>

      <div className={styles.sidechat__feed}>
        <button className={styles.sidechat__feed__message}>Message</button>
        <button className={styles.sidechat__feed__participant}>
          Participant
        </button>
      </div>
      <div className={`${styles.sidechat__chat} ${styles.sidechat__left}`}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.sidechat__chat__usericon}`}
        ></img>{" "}
        <span className={styles.sidechat__chat__message}>Mark</span>
        <i
          className={`fa fa-ellipsis-v ${styles.sidechat__chat__ellipsis}`}
        ></i>
      </div>
      <div className={`${styles.sidechat__chat} ${styles.sidechat__right}`}>
        <img
          src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user"
          className={`${styles.sidechat__chat__usericon}`}
        ></img>{" "}
        <span className={styles.sidechat__chat__message}>Thank you Mark</span>
      </div>

      <div className={styles.sidechat__chatbox}>
        <input
          className={styles.sidechat__chatbox__input}
          type="text"
          placeholder="Type your message"
          name="message"
        />
        <div className={styles.sidechat__chatbox__iconswrapper}>
          <i
            className={`fa fa-paperclip ${styles.sidechat__chatbox__iconswrapper__icon}`}
          ></i>
          <button className={styles.sidechat__chatbox__iconswrapper__sendbtn}>
            <i className={`fa fa-paper-plane`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidechat;
