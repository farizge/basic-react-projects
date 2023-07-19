import { useState } from "react";
// import peopleData from "./data";
import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

const App = () => {
    // const [people, setPeople] = useState(peopleData);

    return (
        <main>
            <Carousel />
            <SlickCarousel />
        </main>
    );
};
export default App;
