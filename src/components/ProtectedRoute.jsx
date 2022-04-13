import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ Component, routePath, ...rest }) {
    const auth = useContextGetter();
    const isAuth = auth.isAuth;
    const token = auth.user.token;
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');
    
  return (
    <div>
        <Routes>
        {isAuth && token ? (
        <Route {...rest} path={routePath} element={<Component/>}/>) 
        : (NoAuthURL.includes(`/${path}`)) ? navigate(`/${path}`) : navigate('/login')}
        </Routes>
    </div>
  );
}

export default ProtectedRoute;