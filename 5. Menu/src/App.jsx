import { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
    const [menuData, setMenuData] = useState(items);
    const categories = ["all", ...new Set(items.map((item) => item.category))];

    const filterItems = (category) => {
        if (category === "all") {
            return setMenuData(items);
        }
        let newArr = items.filter((item) => item.category === category);
        setMenuData(newArr);
    };

    return (
        <main>
            <div className="menu">
                <div>
                    <h1 className="title">Our Menu</h1>
                    <div className="title-underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuData} />
            </div>
        </main>
    );
};
export default App;
