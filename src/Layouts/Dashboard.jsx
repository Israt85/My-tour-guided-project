import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="flex min-h-screen">
                <div className="w-60 bg-red-400 border">
              <ul className="menu space-y-4 p-4">
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



              </ul>
                 
                
                </div>
                <div className=" flex-1 border">
                  <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;