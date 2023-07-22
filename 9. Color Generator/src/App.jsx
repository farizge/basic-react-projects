import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const [colorList, setColorList] = useState(new Values("#e22").all(10));

    const addColor = (color) => {
        try {
            let newColorList = new Values(color).all(10);
            setColorList(newColorList);
            toast.success("Added Colors");
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div>
            <Form addColor={addColor} />
            <ColorList colorList={colorList} />
            <ToastContainer position="top-right" />
        </div>
    );
};
export default App;
