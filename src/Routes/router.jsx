import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Community from '../Pages/Community/Community';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AllPackage from '../Pages/AllPackage/AllPackage';
import PackageDetails from './PackageDetails';

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
    }
  ]);

export default router;