import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useaxiosSecure";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const MyProfile = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async(data) => {
        const imageFile = {image : data.image[0]}
        const res = await axiosSecure.post(image_hosting_api,imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            const story ={
                experience : data.message,
                image: res.data.data.display_url

            }
          const storyRes= await axiosPublic.post('/story', story)
          console.log(storyRes);
          if(storyRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
          }
        }
        console.log(res.data);
    }


    return (
        <div className="w-full m-10">

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.displayName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">


                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Story</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <form onSubmit={handleSubmit(onSubmit)} >



                                    <div className="modal-box p-4 my-4 w-96">

                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" {...register("image")} type="file"/>


                                            <div>
                                                <label className=" pt-2 text-sm font-medium text-gray-900 dark:text-white">share your experience :</label>
                                                <textarea id="message" {...register("message")} rows="4" className="my-4 mx-auto p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                                <button>submit</button>
                                            </div>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn bg-red-800 p-2 rounded-lg">Close</button>
                                                </form>
                                            </div>
                                    </div>
                                </form>
                            </dialog>


                        </a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;