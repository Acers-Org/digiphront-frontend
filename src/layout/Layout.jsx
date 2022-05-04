import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import useContextGetter from "../hooks/useContextGetter";
import DashboardLayout from "./DashboardLayout";

const Layout = ({ children }) => {
  const auth = useContextGetter();
  const isAuth = auth.isAuth;

  return !isAuth ? (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  ) : (
    <DashboardLayout>{children}</DashboardLayout>
  );
};
export default Layout;
