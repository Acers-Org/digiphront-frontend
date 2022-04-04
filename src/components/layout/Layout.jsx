import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";

const Layout = ({children}) => {

    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;