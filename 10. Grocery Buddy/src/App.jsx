import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
};

const defaultValue = JSON.parse(localStorage.getItem("items") || "[]");

const App = () => {
    const [items, setItems] = useState(defaultValue);

    const addItem = (item) => {
        const newItem = { id: nanoid(), name: item, isComplete: false };
        const newItems = [...items, newItem];
        setItems(newItems);
        setLocalStorage(newItems);
        toast.success("Item Added");
    };
    const removeItem = (id) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        setLocalStorage(newItems);
        toast.warning("Item Removed");
    };

    const editItem = (id) => {
        let newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, isComplete: !item.isComplete };
            }
            return item;
        });
        setItems(newItems);
        setLocalStorage(newItems);
        toast.info("Completed");
    };
    return (
        <>
            <main className="section-center">
                <Form addItem={addItem} />
                <Items
                    items={items}
                    removeItem={removeItem}
                    editItem={editItem}
                />
            </main>
            <ToastContainer position="top-center" autoClose={1000} />
        </>
    );
};

export default App;
