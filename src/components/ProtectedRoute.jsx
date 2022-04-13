import { Navigate, useLocation} from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
//import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ children }) {
    const auth = useContextGetter();
    const isAuth = auth.isAuth;
    const token = auth.user.token;
    const location = useLocation();
    
    if (!(isAuth && token)) {
      <Navigate to='/login' state={{ path: location.pathname }}/>
    }
  return children
}

export default ProtectedRoute;