import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Community from '../Pages/Community/Community';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AllPackage from '../Pages/AllPackage/AllPackage';
import PackageDetails from './PackageDetails';
import GuideProfile from '../Pages/GuideProfile/GuideProfile';
import Dashboard from '../Layouts/Dashboard';
import Mybookings from '../Pages/Dashboard/Mybookings';
import MyProfile from '../Pages/Dashboard/MyProfile';
import MyWishlist from '../Pages/Dashboard/MyWishlist';
import StoryDetails from '../Pages/Home/StorySection/StoryDetails';
import ManageUser from '../Pages/Dashboard/Admin/ManageUser';
import AdminProfile from '../Pages/Dashboard/Admin/adminProfile';
import AddPackage from '../Pages/Dashboard/Admin/AddPackage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/aboutus',
            element: <About></About>
        },
        {
            path: '/community',
            element: <Community></Community>
        },{
          path: '/allpackage',
          element: <AllPackage></AllPackage>,
        },
        {
          path: '/tours/:id',
          element:<PackageDetails></PackageDetails>
        },
        {
          path: '/guide/:id',
          element: <GuideProfile></GuideProfile>
        },
        {
          path: '/story/:id',
          element: <StoryDetails></StoryDetails>,
          
        }
      ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'mybookings',
        element: <Mybookings></Mybookings>
        },{
          path: 'myprofile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'mywishlist',
          element: <MyWishlist></MyWishlist>
        },

        // admin
        {
          path: 'manageusers',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'adminprofile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'addpackage',
          element: <AddPackage></AddPackage>
        }

      ]
    }
  ]);

export default router;