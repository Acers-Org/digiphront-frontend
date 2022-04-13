import { useContext } from 'react';
import AppContext  from '../store/appContext';

function useContextGetter() {
    const context = useContext(AppContext)
    console.log(context)
    return context;
}

export default useContextGetter;