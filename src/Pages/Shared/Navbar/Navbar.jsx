import { Link } from 'react-router-dom';
import logo from '../../../assets/ttg.jpg'

const Navbar = () => {
    return (
        <div>


            <nav className="bg-green-700 text-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3">
                        <img src={logo}className="h-8" alt="Flowbite Logo" />
                       <div>
                       <div className=" text-2xl font-semibold dark:text-white"> Travel Guide</div>
                       </div>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                      
                       
                        <button> <Link to='/login'><span className='md:hover:text-blue-700'>Login</span></Link>/<Link to='/register'><span className='md:hover:text-blue-700'>Register</span></Link> </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link to='/'><li>
                                <a href="#" className="block py-2 px-3 md:hover:text-blue-700  rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li></Link>
                            <Link to='/aboutus'><li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                            </li></Link>
                           <Link to='/community'> <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                            </li></Link>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;