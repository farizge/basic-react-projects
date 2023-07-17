import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(0);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setJobs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="jobs-center">
                    <BtnContainer
                        jobs={jobs}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                    />
                    <JobInfo jobs={jobs} currentItem={currentItem} />
                </div>
            )}
        </>
    );
};
export default App;
