import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Dashboard = () => {

    const isAdmin = true;
    const {user} = useAuth()
    return (
        <div className="flex min-h-screen">

    
      <ul className="menu w-52 space-y-4 p-4">
       { isAdmin? <>
              <li>
                <NavLink to='/dashboard/adminprofile'>
                My Profile
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/dashboard/addpackage'>
                Add Package
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/dashboard/manageusers'>
               Manage Users
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/'>
                Home
                </NavLink>
                
                </li>



            </>: 
    <>
    
              <li>
                <NavLink to='/dashboard/myprofile'>
                My Profile
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/dashboard/mybookings'>
                My Bookings
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/dashboard/mywishlist'>
                My WishList
                </NavLink>
                
                </li>
              <li>
                <NavLink to='/'>
                Home
                </NavLink>
                
                </li>

    
    
    </>
    
    }



              </ul>
                <div className=" flex-1 bg-green-100">
                  <Outlet></Outlet>
                </div>
            </div>
    );
};

export default Dashboard;