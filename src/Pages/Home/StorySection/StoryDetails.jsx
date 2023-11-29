import { useParams } from "react-router-dom";
import useStory from "../../../Hooks/useStory";
import { FacebookShareButton } from "react-share";
import { FaShare } from "react-icons/fa";

const StoryDetails = () => {
  const [story] = useStory();
  const { id } = useParams();
  const shareUrl = window?.location.href ?? '';
 
  const singleStory = story.find((store) => store._id === id);

  return (
    <div className="w-[max-content] mx-auto my-10">
      <div>
        <img src={singleStory?.image} alt="" />
        {singleStory?.experience}
      </div>
      <div className="flex justify-end mt-4">
        <FacebookShareButton url={`${shareUrl}`}>
        <button
          type="button"
          className="px-5 py-2.5 text-sm gap-2 font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Share Now
          <FaShare className="ml-2" />
        </button>
        </FacebookShareButton>
       
      </div>
    </div>
  );
};

export default StoryDetails;
