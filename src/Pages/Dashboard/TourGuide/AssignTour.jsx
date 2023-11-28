import useAuth from "../../../Hooks/useAuth";
import useTours from "../../../Hooks/useTours";


const AssignTour = () => {
    const [tours] = useTours()
    const {user} = useAuth()
    return (
        <div>
            <h2>assign</h2>
            
        </div>
    );
};

export default AssignTour;