import { Routes, Route, useNavigate } from "react-router-dom";
import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ children, routePath, ...rest }) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem('user');
  //const { location: {pathname} } = useHistory();
  const navigate = useNavigate()
  //const pathnameTree=pathname.split('/');

  return (
    <div>
        <Routes>
        {token && user ? (
        <Route {...rest} path={routePath} element={children}/>) 
        :(NoAuthURL.includes(`/`)) ? navigate() : navigate('/')}
        </Routes>
    </div>
  );
}

export default ProtectedRoute;