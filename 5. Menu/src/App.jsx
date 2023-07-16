import { useState } from "react";
import items from "./data";
import Menu from "./Menu";

const App = () => {
    const [menuData, setMenuData] = useState(items);

    return (
        <main>
            <div className="menu">
                <Menu items={menuData} />
            </div>
        </main>
    );
};
export default App;
