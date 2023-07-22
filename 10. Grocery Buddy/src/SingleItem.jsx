import React from "react";

function SingleItem({ id, item, isComplete, removeItem }) {
    return (
        <div className="single-item">
            <input type="checkbox" value={isComplete} />
            <p>{item}</p>
            <button
                className="btn remove-btn"
                value={id}
                onClick={() => removeItem(id)}
            >
                Remove
            </button>
        </div>
    );
}

export default SingleItem;
