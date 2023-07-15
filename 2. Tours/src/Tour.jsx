import React from "react";
import { useState } from "react";

function Tour({ image, info, name, price, id, removeTour }) {
    const [showFull, setShowFull] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <div className="tour-price">${price}</div>
            <div className="tour-info">
                <h5>{name}</h5>
                <div>
                    <p>
                        {showFull ? info : `${info.substring(0, 200)} ...`}
                        <span>
                            <br />
                            <button
                                className="info-btn"
                                onClick={() => setShowFull(!showFull)}
                            >
                                {showFull ? "Show Less" : "Read More"}
                            </button>
                        </span>
                    </p>
                </div>
                <button
                    className="btn delete-btn btn-block"
                    onClick={() => removeTour(id)}
                >
                    Not Interested
                </button>
            </div>
        </article>
    );
}

export default Tour;
