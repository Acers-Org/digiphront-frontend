import { useNavigate, useLocation, Navigate} from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
//import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute() {
    const auth = useContextGetter();
    const isAuth = auth.isAuth;
    const token = auth.user.token;
    //const navigate = useNavigate();
    //const location = useLocation();
    //const path = location.pathname.split('/');
    
  return (
    <div>
        {!isAuth && !token ? (<Navigate to='/login') : (<Navigate to='/')}
    </div>
  );
}

export default ProtectedRoute;