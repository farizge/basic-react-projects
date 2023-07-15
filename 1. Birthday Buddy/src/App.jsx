import { useState } from "react";
import peopleData from "./data";
import List from "./List";

const App = () => {
    const [people, setPeople] = useState(peopleData);

    const clearList = () => setPeople([]);

    return (
        <main>
            <section className="container">
                <h3>Birthdays Today</h3>
                <List people={people} />
                <button className="btn btn-block" onClick={clearList}>
                    Clear List
                </button>
            </section>
        </main>
    );
};
export default App;
