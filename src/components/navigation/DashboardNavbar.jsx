import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useContextGetter from "../../hooks/useContextGetter";

const DashboardNavbar = () => {
  const {
    user: { user },
  } = useContextGetter();
  return (
    <nav className={styles.dashboardnav}>
      {user?.teacher.isTeacher ? (
        <></>
      ) : user?.student.isStudent ? (
        <></>
      ) : user?.admin.isAdmin ? (
        <>
          <div className={styles.dashboardnav__search}>
            <input
              className={styles.dashboardnav__search__input}
              type="text"
              placeholder="search"
              name="search"
            />
            <i
              className={`fa fa-search ${styles.dashboardnav__search__icon}`}
            ></i>
          </div>
          <ul className={styles.dashboardnav__navbar}>
            <li className={styles.dashboardnav__navbar__link}>
              <NavLink to="/">
                {" "}
                <i
                  className={`fa fa-bell ${styles.dashboardnav__navbar__link__notificationicon}`}
                ></i>
                <span
                  className={styles.dashboardnav__navbar__link__notifications}
                >
                  5
                </span>
              </NavLink>
            </li>
            <li className={styles.dashboardnav__navbar__link}>
              <NavLink to="/">
                <span>
                  <strong>{user.firstname + " " + user.lastname}</strong>
                  <br />
                  Admin
                </span>
                <img
                  src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="user"
                  className={`${styles.dashboardnav__navbar__link__usericon}`}
                ></img>{" "}
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </nav>
  );
};
export default DashboardNavbar;
