import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { list } from "./data";
import { BiSolidQuoteRight } from "react-icons/bi";

function SlickCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <div className="slick-container">
            <Slider {...settings}>
                {list.map((person) => {
                    const { id, name, image, title, quote } = person;
                    return (
                        <div key={id}>
                            <img
                                src={image}
                                alt={name}
                                className="person-img"
                            />
                            <h5 className="name">{name}</h5>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <BiSolidQuoteRight className="icon" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SlickCarousel;
