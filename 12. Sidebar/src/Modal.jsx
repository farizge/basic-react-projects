import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

function Modal() {
    const { modalClose, isModalOpen } = useGlobalContext();

    return (
        <div
            className={
                isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }
        >
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={modalClose}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default Modal;
