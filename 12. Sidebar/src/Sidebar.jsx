import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

function Sidebar() {
    const { closeSidebar, isSidebarOpen } = useGlobalContext();
    return (
        <aside
            className={
                isSidebarOpen
                    ? "sidebar-container show-sidebar"
                    : "sidebar-container"
            }
        >
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
                <button className="sidebar-close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-links">
                {social.map((item) => {
                    const { id, url, icon } = item;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;
