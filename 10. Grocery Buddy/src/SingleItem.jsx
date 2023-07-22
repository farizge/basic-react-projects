import React from "react";

function SingleItem({ item, removeItem, editItem }) {
    return (
        <div className="single-item">
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => editItem(item.id)}
            />
            <p style={{ textDecoration: item.isComplete && "line-through" }}>
                {item.name}
            </p>
            <button
                className="btn remove-btn"
                onClick={() => removeItem(item.id)}
            >
                Remove
            </button>
        </div>
    );
}

export default SingleItem;
