import "./Sidebar.css";
import { SidebarData, TeacherSideBar, AdminSideBar } from "./SidebarData";
import logo from "../../assets/logo.svg";
// import { useState, useEffect } from "react";
import useContextGetter from "../../hooks/useContextGetter";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  let location = useLocation();
  const {
    user: { user },
    logout,
  } = useContextGetter();
  // const USER = JSON.parse(localStorage.getItem("user"));
  // const [user, setUser] = useState({ admin: {}, student: {}, teacher: {} });

  // useEffect(() => {
  //   setUser({
  //     ...user,
  //     admin: USER.user.admin,
  //     student: USER.user.student,
  //     teacher: USER.user.teacher,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <ul className="sidebar-list list">
        {user?.teacher.isTeacher
          ? TeacherSideBar.map((val, key) => {
              return (
                <li
                  className={`list-item item ${
                    location.pathname === val.link ? "active" : ""
                  }`}
                  key={key}
                >
                  <Link
                    className={`${
                      location.pathname === val.link ? "active" : ""
                    }`}
                    to={val.link}
                  >
                    {val.title}
                  </Link>
                </li>
              );
            })
          : user?.student.isStudent
          ? SidebarData.map((val, key) => {
              return (
                <li
                  className={`list-item item ${
                    location.pathname === val.link ? "active" : ""
                  }`}
                  key={key}
                >
                  <Link
                    to={val.link}
                    className={`${
                      location.pathname === val.link ? "active" : ""
                    }`}
                  >
                    {val.title}
                  </Link>
                </li>
              );
            })
          : AdminSideBar.map((val, key) => {
              return (
                <li
                  className={`list-item item ${
                    location.pathname === val.link ? "active" : ""
                  }`}
                  key={key}
                >
                  <Link
                    to={val.link}
                    className={`${
                      location.pathname === val.link ? "active" : ""
                    }`}
                  >
                    {val.title}
                  </Link>
                </li>
              );
            })}

        <li className="list-item item">
          <span
            onClick={() => {
              logout();
            }}
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
