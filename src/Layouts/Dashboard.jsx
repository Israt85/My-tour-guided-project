import { NavLink, Outlet } from "react-router-dom";
import useGuideT from "../Hooks/useGuideT";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTourGuide] = useGuideT();
  
    return (
      <div className="flex min-h-screen">
        <ul className="menu w-52 bg-pink-200 text-xl py-10 space-y-4 px-4">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminprofile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addpackage">Add Package</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">Manage Users</NavLink>
              </li>
              <li className="border-t-2 border-black">
                <NavLink to="/">Home</NavLink>
              </li>
            </>
          )}
  
          {!isAdmin && !isTourGuide && (
            <>
              <li>
                <NavLink to="/dashboard/myprofile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mywishlist">My WishList</NavLink>
              </li>
              <li className="border-t-2 border-black">
                <NavLink to="/">Home</NavLink>
              </li>
            </>
          )}
          {
            isTourGuide && (<>
             <li>
                <NavLink to="/dashboard/tourprofile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/assingtours">My Assign tours</NavLink>
              </li>
              <li className="border-t-2 border-black">
                <NavLink to="/">Home</NavLink>
              </li>
            
            </>)
          }


        </ul>
        <div className="flex-1 bg-green-100">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  