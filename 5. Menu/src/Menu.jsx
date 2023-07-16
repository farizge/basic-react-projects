import React from "react";
import MenuItem from "./MenuItem";

function Menu({ items }) {
    return (
        <section className="section-center">
            {items.map((item) => {
                return <MenuItem key={item.id} {...item} />;
            })}
        </section>
    );
}

export default Menu;
