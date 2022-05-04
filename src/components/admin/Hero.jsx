import React from "react";
import styles from "../../pages/admin/Admin.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__card}>
        <h4>Students</h4>
        <span>10,000</span>
      </div>
      <div className={`${styles.hero__card} ${styles.hero__teachers}`}>
        <h4>Teachers</h4>
        <span>50</span>
      </div>
      <div className={styles.hero__card}>
        <h4>Total Earnings</h4>
        <span>$20,000</span>
      </div>
      <div className={`${styles.hero__card} ${styles.hero__schedule}`}>
        <h4>Shedule</h4>
        <ol>
          <li>Meeting with teachers</li>
          <li>Plan excursion for students</li>
        </ol>
      </div>
    </div>
  );
};

export default Hero;
