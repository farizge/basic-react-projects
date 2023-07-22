import React from "react";
import SingleItem from "./SingleItem";

function Items({ items, removeItem }) {
    return (
        <div className="items">
            {items.map((item) => {
                return (
                    <SingleItem
                        key={item.id}
                        id={item.id}
                        item={item.name}
                        isComplete={item.isComplete}
                        removeItem={removeItem}
                    />
                );
            })}
        </div>
    );
}

export default Items;
