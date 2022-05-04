import DashboardLayout from "../../layout/DashboardLayout";
import { Link } from "react-router-dom";
import styles from "./Teacher.module.scss";
import ReactPlayer from "react-player";
import "./Teacher.css";

const TeacherClasses = () => {
  return (
    <DashboardLayout>
      <div className={styles.teacher}>
        <div className="teacher-classes-nav row d-flex w-100 justify-content-center">
          <div className={`col-md-8 col-sm-12`}>
            <div
              className={`${styles.classes_video_card} p-4 d-flex justify-content-between`}
            >
              <Link to="#">
                Invited to class <span className="invite">32</span>
              </Link>
              <Link to="#">
                Absent People <span className="absent">52</span>
              </Link>
              <button type="submit" className="add">
                {" "}
                + Add People
              </button>
            </div>
            <div className="video d-flex justify-content-center pt-5">
              <ReactPlayer url="https://youtu.be/zLu1HBkIaKI" />
            </div>
            <div className="video-label d-flex justify-content-between ">
              <h2 className="header">
                The Business of illustration & lettering
              </h2>
              <button>
                {" "}
                <i
                  className="fa fa-share-alt"
                  aria-hidden="true"
                ></i> Share{" "}
              </button>
            </div>
            <div className="content">
              <h3 className="chapter">
                {" "}
                <span>Chapter 5 </span> - Basic Drawing{" "}
              </h3>
              <div className="d-flex justify-content-between mt-3">
                <h3 className="overview">Overview</h3>
                <h3 className="course-material">Course Material</h3>
              </div>
              <p className="text">
                Nuture yourself while you pratice your drawing skills with
                drawing and sketching which is as way of lorem ipsum sum uyd{" "}
                <span className="more">More...</span>{" "}
              </p>
              <h3 className="topic mt-4">Chapter Topics</h3>
              <div className="topics">
                <p className="text">Moving beyond trials and tribulation</p>
                <p className="text">Hone your crafts</p>
              </div>
            </div>
          </div>
          <div className="aside col-md-4 col-sm-none">
            <div className="search-box my-5">
              <div className="groups d-flex justify-content-between">
                <input
                  type="search"
                  name=""
                  id="search"
                  placeholder="Search"
                  className="search"
                />
                <i className="fa fa-search" aria-hidden="true">
                  {" "}
                </i>
              </div>
            </div>

            <div className="feed mt-4 d-flex justify-content-between">
              <button className="message">Message</button>
              <button className="participant">Participant</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherClasses;
