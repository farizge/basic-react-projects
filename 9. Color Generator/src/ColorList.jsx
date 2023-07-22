import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

function ColorList({ colorList }) {
    return (
        <div className="colors">
            {colorList.map((color, index) => {
                return (
                    <SingleColor
                        key={nanoid()}
                        hexColor={color}
                        index={index}
                    />
                );
            })}
        </div>
    );
}

export default ColorList;
