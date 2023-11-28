import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";
import useGuideT from "../Hooks/useGuideT";


const GuideRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isTourGuide,isGuideLoading] = useGuideT()

    const location = useLocation()

        if(loading || isGuideLoading){
            return <RotatingLines
            strokeColor="#4fa94d"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
        if(user && isTourGuide){
          return children;
        }
    
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default GuideRoute;