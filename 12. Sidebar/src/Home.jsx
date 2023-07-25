import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
    const { openSidebar, modalOpen } = useGlobalContext();

    return (
        <main>
            <button onClick={openSidebar} className="sidebar-toggle">
                <FaBars />
            </button>
            <button onClick={modalOpen} className="btn">
                Show Modal
            </button>
        </main>
    );
}

export default Home;
