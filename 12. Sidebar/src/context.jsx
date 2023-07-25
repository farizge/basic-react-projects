import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const modalOpen = () => {
        setIsModalOpen(true);
    };
    const modalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                openSidebar,
                closeSidebar,
                modalOpen,
                modalClose,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext) || {};
};
