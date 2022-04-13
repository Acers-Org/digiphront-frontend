import useContextGetter from './useContextGetter';

const useLoggin = () => {
    const auth = useContextGetter()
    const isAuth = auth.isAuth;
    const token = auth.user.token
    if(!isAuth && token){
        const user = JSON.parse(localStorage.getItem("user"));
        login(user);
    }
    return true;
}

export default useLoggin;