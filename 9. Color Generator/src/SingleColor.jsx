import React from "react";
import { toast } from "react-toastify";

function SingleColor({ hexColor, index }) {
    const { hex, weight } = hexColor;

    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success("Copied To Clipboard");
            } catch (err) {
                toast.error(err.message);
            }
        } else {
            toast.error("Can not Copy");
        }
    };

    return (
        <div
            className={index > 10 ? "color color-light" : "color"}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </div>
    );
}

export default SingleColor;
