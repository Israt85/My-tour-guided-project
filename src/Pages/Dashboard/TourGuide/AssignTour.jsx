import useAuth from "../../../Hooks/useAuth";
import useBookings from "../../../Hooks/useBookings";



const AssignTour = () => {
   const [bookings] = useBookings()
    const {user} = useAuth()
    console.log(bookings);
    return (
        <div>
           
            
        </div>
    );
};

export default AssignTour;