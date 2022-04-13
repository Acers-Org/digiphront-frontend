import { Navigate } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
//import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ children }) {
    const auth = useContextGetter();
    const isAuth = auth.isAuth;
    const token = auth.user.token;
    if (!(isAuth && token)) {
      <Navigate to='/login'/>
    }
  return children
}

export default ProtectedRoute;