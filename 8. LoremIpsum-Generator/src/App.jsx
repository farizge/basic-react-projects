import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
    const [count, setCount] = useState(1);
    const [paragraph, setParagraph] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setParagraph(text.slice(0, count));
    };

    return (
        <main>
            <section className="section-center">
                <h4>tired of boring lorem ipsum ?</h4>
                <form className="lorem-form" onSubmit={handleSubmit}>
                    <label htmlFor="Paragrhaph">Paragraphs :</label>
                    <input
                        type="number"
                        min={1}
                        max={8}
                        step={1}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button className="btn">Generate</button>
                </form>
                <div className="lorem-text">
                    {paragraph.map((p) => (
                        <p key={nanoid()}>{p}</p>
                    ))}
                </div>
            </section>
        </main>
    );
};
export default App;
