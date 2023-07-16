import { useState } from "react";
import reviewsData from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviewsData[index];

    const nextReview = () => {
        setIndex((index) => {
            return (index + 1) % reviewsData.length;
        });
    };

    const prevReview = () => {
        setIndex((index) => {
            return (index - 1 + reviewsData.length) % reviewsData.length;
        });
    };

    const randomReview = () => {
        let randomNumber = Math.floor(Math.random() * reviewsData.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        let newIndex = randomNumber % reviewsData.length;
        setIndex(newIndex);
    };

    return (
        <main>
            <section className="review">
                <div className="img-container">
                    <img src={image} alt="name" className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h2 className="author">{name}</h2>
                <h3 className="job">{job}</h3>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button className="prev-btn" onClick={prevReview}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextReview}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="btn btn-hipster" onClick={randomReview}>
                    Surpise Me
                </button>
            </section>
        </main>
    );
};
export default App;
