import { useState } from "react";
import Loading from "./Loading";
import { useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [tourData, setTourData] = useState(null);
    const [loading, setLoading] = useState(true);

    const removeTour = (id) => {
        let newTourData = tourData.filter((tour) => tour.id !== id);
        setTourData(newTourData); //to update the state of array with new value
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setLoading(false);
            setTourData(data);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            {loading ? (
                <Loading />
            ) : tourData.length === 0 ? (
                <div className="title">
                    <h2>No Tours Found</h2>
                    <br />
                    <button className="btn" onClick={() => fetchData()}>
                        Refresh
                    </button>
                </div>
            ) : (
                <Tours tourData={tourData} removeTour={removeTour} />
            )}
        </main>
    );
};
export default App;
