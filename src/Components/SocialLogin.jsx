
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hooks/useAuth';
import useaxiosPublic from '../Hooks/useaxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useaxiosPublic()
    const nevigate = useNavigate()
    const location = useLocation()
    const handleGoogle=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            nevigate(location?.state ? location.state : "/");
            const userInfo ={
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                
            })
        })

    }
    return (
        <div>
            <button onClick={handleGoogle} className="text-white w-full mt-2 bg-blue-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 flex justify-center gap-1 flex-inline dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <div className='text-xl'>
                          <FcGoogle></FcGoogle>
                          </div>
                            Sign in with Google
                        </button>
        </div>
    );
};

export default SocialLogin;