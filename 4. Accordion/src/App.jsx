import { useState } from "react";
import questions from "./data";
import SingleQustion from "./SingleQustion";

const App = () => {
    const [activeId, setActiveId] = useState(null);
    const toggleQuestion = (id) => {
        let newId = id === activeId ? null : id;
        setActiveId(newId);
    };

    return (
        <main>
            <div className="container">
                <h1>Questions</h1>
                {questions.map((question) => {
                    return (
                        <SingleQustion
                            key={question.id}
                            activeId={activeId}
                            toggleQuestion={toggleQuestion}
                            {...question}
                        />
                    );
                })}
            </div>
        </main>
    );
};
export default App;
