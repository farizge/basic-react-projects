import React from "react";
import { useState } from "react";

function Form({ addColor }) {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    };

    return (
        <section className="container">
            <form className="color-form" onSubmit={handleSubmit}>
                <h3>Color Generator</h3>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#e22"
                />
                <button className="btn">Generate</button>
            </form>
        </section>
    );
}

export default Form;
