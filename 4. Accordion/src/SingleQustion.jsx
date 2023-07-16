import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function SingleQustion({ id, title, info, activeId, toggleQuestion }) {
    const isActive = id === activeId;
    return (
        <div className="question">
            <header>
                <h5>{title}</h5>
                <button
                    className="question-btn"
                    onClick={() => {
                        toggleQuestion(id);
                    }}
                >
                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </div>
    );
}

export default SingleQustion;
