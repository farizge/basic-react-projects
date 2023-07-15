import { useState } from "react";
import reviewsData from "./data";

const App = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = reviewsData[index];

    const nextReview = () => {
        setIndex((index) => {
            return (index + 1) % reviewsData.length;
        });
    };

    return <h2>Reviews Starter</h2>;
};
export default App;
