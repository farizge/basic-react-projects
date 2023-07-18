import { shortList, list, longList } from "./data";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function Carousel() {
    const [people, setPeople] = useState(longList);
    const [currentPerson, setCurrentPerson] = useState(0);

    const nextSlide = () => {
        setCurrentPerson((prevPerson) => {
            return (prevPerson + 1) % people.length;
        });
    };
    const prevSlide = () => {
        setCurrentPerson((prevPerson) => {
            return (prevPerson - 1 + people.length) % people.length;
        });
    };

    useEffect(() => {
        let slides = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(slides);
    }, [currentPerson]);

    return (
        <section className="slider-container">
            {people.map((person, personIndex) => {
                const { id, name, image, title, quote } = person;
                return (
                    <article
                        key={id}
                        className="slide"
                        style={{
                            transform: `translateX(${
                                100 * (personIndex - currentPerson)
                            }%)`,
                            opacity: personIndex === currentPerson ? 1 : 0,
                            visibility:
                                personIndex === currentPerson
                                    ? "visible"
                                    : "hidden",
                        }}
                    >
                        <img src={image} alt={name} className="person-img" />
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <BiSolidQuoteRight className="icon" />
                    </article>
                );
            })}
            <button className="prev" onClick={prevSlide}>
                <HiChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
                <HiChevronRight />
            </button>
        </section>
    );
}

export default Carousel;
