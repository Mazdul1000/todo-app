import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import auth from "../../firebase.init";


const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;