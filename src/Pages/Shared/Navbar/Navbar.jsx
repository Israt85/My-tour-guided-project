import { Link } from 'react-router-dom';
import logo from '../../../assets/ttg.jpg'
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';

const Navbar = () => {
    const { user, userLogOut} = useAuth()

    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [forSmall, setForSmall] = useState(false)
    const toggleForSmall = ()=>{
        setForSmall(!forSmall)
    }

    const toggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
    };
    const handelLogOut = ()=>{
        userLogOut()
        .then(result =>{
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div >


            <nav className="bg-green-600  text-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <div>
                            <div className=" text-2xl font-semibold dark:text-white"> Travel Guide</div>
                        </div>

                    </a>
                    <div className="flex items-center md:order-2  rtl:space-x-reverse">



                        {
                            user ? <>

                                <div className='w-full'>
                                    <button

                                        className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button"
                                        onClick={toggleDropdown}
                                    >
                                        <img className='w-16 h-16 rounded-full' src={user.photoURL} alt="" />


                                    </button>

                                    {isDropdownVisible && (
                                        <div className="fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600">
                                            {/* Dropdown content */}
                                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                                <div>{user.displayName}</div>
                                                <div className="font-medium truncate">{user.email}</div>
                                            </div>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                                <Link to='/dashboard'><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li></Link>
                                            </ul>
                                            <div className="py-2">
                                                <button onClick={handelLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </> :

                                <button> <Link to='/login'><span className='md:hover:text-blue-700'>Login</span></Link>/<Link to='/register'><span className='md:hover:text-blue-700'>Register</span></Link> </button>

                        }

                    </div>

                    <div className='relative'>
                    <button onClick={toggleForSmall} className="md:hidden text-white mx-6 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
                   
{
    forSmall && (
        <div className="fixed z-10 mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600">
        {/* Dropdown content */}
        <ul className="py-2 text-sm px-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
        <Link to='/'><li>
                                <a href="#" className="block py-2 px-3 md:hover:text-blue-700  rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li></Link>
                            <Link to='/aboutus'><li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                            </li></Link>
                            <Link to='/community'> <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                            </li></Link>
                           <Link to='/allstories'> <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
                            </li></Link>
                                            </ul>
    </div>
    )
}
</div>






                    <div className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
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
                           <Link to='/allstories'> <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
                            </li></Link>
                           <Link to='/contact'> <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;