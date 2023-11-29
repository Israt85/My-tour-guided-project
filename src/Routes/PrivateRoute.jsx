import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";



const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <RotatingLines
        strokeColor="#4fa94d"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    }
    if(user)
        return children;
    
      
    return <Navigate state={location.pathname} to="/login"></Navigate>
}
export default PrivateRoute;