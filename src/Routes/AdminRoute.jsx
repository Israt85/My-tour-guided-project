import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const AdminRoute = ({children}) => {
    const [user, loading] = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

        if(loading || isAdminLoading){
            return <RotatingLines
            strokeColor="#4fa94d"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
        if(user && isAdmin){
          return children;
        }
    
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default AdminRoute;