import useTours from "../Hooks/useTours";


const Gallery = () => {
    const [tours] = useTours()
    return (
        <div>
             <h2 className="text-center text-3xl my-6">Gallery Section</h2>

            <div className="grid grid-cols-2 mx-6 md:grid-cols-4 gap-2">

                {
                    tours.map(tour => <div key={tour._id}>
                        <img className="h-auto border-4 border-green-700 max-w-full rounded-lg" src={tour.img} alt=""/>
                    </div> )
                }
                
            </div>

        </div>
    );
};

export default Gallery;