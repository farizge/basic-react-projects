import React from "react";
import Tour from "./Tour";

function Tours({ tourData, removeTour }) {
    return (
        <section>
            <h1 className="title">Our Tours</h1>
            <div className="title-underline"></div>

            <div className="tours">
                {tourData.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    );
                })}
            </div>
        </section>
    );
}

export default Tours;
