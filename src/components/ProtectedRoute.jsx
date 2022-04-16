import { Navigate } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import useLogin from '../hooks/useLogin';
//import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ children }) {
    const auth = useContextGetter();
    const login = useLogin();
    const isAuth = auth.isAuth;
    const user = auth.user;
    
    if (!(isAuth && user.token && login)) {
      return <Navigate to='/login' />
    } //else if (login) {
    //   return children
    // }
  return children
}

export default ProtectedRoute;