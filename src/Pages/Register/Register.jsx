import regis from '../../assets/register.png'
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {


        console.log(data)
    }

    return (
        <div>
            <div>
            <h2 className='text-center my-6 text-green-700 font-extrabold text-2xl underline'>Register here.....</h2>
            <div className='flex my-10 justify-evenly items-center'>
                <div className='w-80 px-4 rounded-md py-10 bg-slate-300 h-[500px]' >


                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo url</label>
                            <input type="url" {...register("url")}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <button type="submit" className="text-white w-full bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>

                </div>
                <div className='w-1/2'>
                    <img className='w-96 h-96 bg-green-300 rounded-b-full rounded-l-full' src={regis} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;