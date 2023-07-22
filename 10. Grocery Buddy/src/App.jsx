import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = async (item) => {
        const newItems = await setItems((prevItems) => [
            ...prevItems,
            { id: nanoid(), name: item, isComplete: false },
        ]);
        localStorage.setItem(JSON.stringify("items", newItems));
    };
    const removeItem = (id) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        toast.warning("Item Removed");
    };
    return (
        <>
            <main className="section-center">
                <Form addItem={addItem} />
                <Items items={items} removeItem={removeItem} />
            </main>
            <ToastContainer position="top-center" />
        </>
    );
};

export default App;
