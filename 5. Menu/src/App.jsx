import { useState } from "react";
import items from "./data";
import Menu from "./Menu";

const App = () => {
    const [menuData, setMenuData] = useState(items);
    const categories = new Set(["all", ...items.map((item) => item.category)]);

    return (
        <main>
            <div className="menu">
                <Menu items={menuData} />
            </div>
        </main>
    );
};
export default App;
