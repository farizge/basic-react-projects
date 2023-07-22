import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
    const [inputItem, setInputItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputItem) {
            toast.error("Please provide valid input");
        } else {
            addItem(inputItem);
            setInputItem("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Buddy</h4>
            <div className="form-control">
                <input
                    type="text"
                    className="form-input"
                    value={inputItem}
                    onChange={(e) => setInputItem(e.target.value)}
                    autoFocus
                />
                <button className="btn">Add</button>
            </div>
        </form>
    );
}

export default Form;
