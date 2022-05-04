import Sidebar from "../components/sidebar/Sidebar";
import DashboardNavbar from "../components/navigation/DashboardNavbar";
import styles from "./Layout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className={styles.contentwrapper}>
        <DashboardNavbar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
