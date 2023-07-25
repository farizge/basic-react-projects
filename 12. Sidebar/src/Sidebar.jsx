import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
    const { closeSidebar, isSidebarOpen } = useGlobalContext();
    return <aside></aside>;
}

export default Sidebar;
