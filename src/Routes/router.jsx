import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Community from '../Pages/Community/Community';

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
        }
      ]
    },
  ]);

export default router;