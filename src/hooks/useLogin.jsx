import { useContext } from 'react';
import AppContext  from '../store/appContext';

const useLoggin = () => {
    const {login1, isAuth1} = useContext(AppContext);
    const {login, isAuth } = AppContext.Consumer
    console.log(login)
    const isLoggedIn = localStorage.getItem("isAuth");
    if(!isAuth && isLoggedIn){
        const user = JSON.parse(localStorage.getItem("user"));
        login(user);
    }
    return true;
}

export default useLoggin;