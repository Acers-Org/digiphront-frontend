import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import styles from "./Student.module.scss";
import ReactPlayer from "react-player";
import Sidechat from "../../components/student/classes/SideChat";

const Myclasses = () => {
  return (
    <DashboardLayout>
      <div className={styles.student}>
        <div className="row">
          <div className="col-md-8">
            <div className={styles.student__video}>
              <div className={styles.student__video__player}>
                <ReactPlayer url="https://www.youtube.com/embed/AK9rJPA8Xs4" />
              </div>
              <div className={styles.student__video__header}>
                <h2 className={styles.student__video__header__title}>
                  The Business of illustration & lettering
                </h2>
                <button className={styles.student__video__header__share}>
                  {" "}
                  <i
                    className="fa fa-share-alt"
                    aria-hidden="true"
                  ></i> Share{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidechat />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Myclasses;
