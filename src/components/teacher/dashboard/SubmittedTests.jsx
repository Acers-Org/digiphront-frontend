import React from "react";
import styles from "../../../pages/teacherDashboard/Teacher.module.scss";

const Submittedtests = () => {
  return (
    <div className={styles.submittedcard}>
      <nav>
        <h4>Submitted Tests</h4>
        <ul className={styles.submittedcard__navbar}>
          <li className={styles.submittedcard__navbar__link}>
            Class 5 <i className="fa fa-chevron-down"></i>
          </li>
        </ul>
      </nav>
      <div class="table-responsive">
        <table className="table table-hover">
          <thead className={`thead-light ${styles.submittedcard__tablehead}`}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date of Submission</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="user"
                  className={`${styles.submittedcard__usericon}`}
                ></img>{" "}
                Mark
              </td>
              <td>22nd Wednesday April, 2021</td>
              <td>
                <span className={`${styles.submittedcard__status}`}>
                  active
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="user"
                  className={`${styles.submittedcard__usericon}`}
                ></img>{" "}
                Mark
              </td>
              <td>22nd Wednesday April, 2021</td>
              <td>
                <span className={`${styles.submittedcard__status}`}>
                  active
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="user"
                  className={`${styles.submittedcard__usericon}`}
                ></img>{" "}
                Mark
              </td>
              <td>22nd Wednesday April, 2021</td>
              <td>
                <span className={`${styles.submittedcard__status}`}>
                  active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submittedtests;
