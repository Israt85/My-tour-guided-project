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
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Tourprofile from '../Pages/Dashboard/TourGuide/Tourprofile';
import AssignTour from '../Pages/Dashboard/TourGuide/AssignTour';
import GuideRoute from './GuideRoute';
import AllStories from '../Pages/AllStories/AllStories';
import TourTypeFilter from '../Pages/Home/TourType/TourTypeFilter';

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
          element:<PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>
        },
        {
          path: '/guide/:id',
          element: <GuideProfile></GuideProfile>
        },
        {
          path: '/story/:id',
          element: <PrivateRoute><StoryDetails></StoryDetails></PrivateRoute>,
          
        },{
          path: 'allStories',
          element: <AllStories></AllStories>
        },
        {
          path: '/list/:id',
          element: <PackageDetails></PackageDetails>
        },
        {
          path: '/tour/:tourtype',
          element: <TourTypeFilter></TourTypeFilter>
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
        element: <PrivateRoute><Mybookings></Mybookings></PrivateRoute>
        },{
          path: 'myprofile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: 'mywishlist',
          element:<PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
        },

        // admin
        {
          path: 'manageusers',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'adminprofile',
          element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path: 'addpackage',
          element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
        },


        // tour guide
        {
           path: 'tourprofile',
           element: <GuideRoute><Tourprofile></Tourprofile></GuideRoute>
        },
        {
          path: 'assingtours',
          element: <GuideRoute><AssignTour></AssignTour></GuideRoute>
        }

      ]
    }
  ]);

export default router;