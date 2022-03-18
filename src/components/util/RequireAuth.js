import { Navigate } from 'react-router-dom';

function RequireAuth({ children }){
    const isAuth = false;

    if(isAuth){
        return children;
    }else{
        return <Navigate to="/login" />;
    }
}

export default RequireAuth;